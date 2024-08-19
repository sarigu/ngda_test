import React, { useEffect, useRef } from 'react';
import { ConversationalForm } from 'conversational-form';

const ConversationForm = () => {
  const formFields = [
    {
      tag: 'input',
      type: 'radio',
      name: 'region',
      'cf-questions': 'What does your region look like?',
      'cf-label': 'Hills',
      value: 'hills',
    },
    {
      tag: 'input',
      type: 'radio',
      name: 'region',
      'cf-label': 'Plains',
      value: 'plains',
    },
    {
      tag: 'input',
      type: 'radio',
      name: 'region',
      'cf-label': 'Coastal',
      value: 'coastal',
    },
    {
      tag: 'input',
      type: 'radio',
      name: 'usecase',
      'cf-questions': 'Cool your region is {region}? What is the use case?',
      'cf-label': 'Disaster relief',
      value: 'disaster_relief',
    }, 
    {
      tag: 'input',
      type: 'radio',
      name: 'usecase',
      'cf-label': 'Chronic case',
      value: 'chronic_case',
    },
    {
      tag: 'input',
      type: 'radio',
      name: 'usecase',
      'cf-label': 'One-off case',
      value: 'one-off_case',
    },
    {
      tag: 'input',
      type: 'radio',
      name: 'implementation',
      'cf-questions': 'How much time on implementation can you spare?',
      'cf-label': 'Low',
      value: 'low',
    }, 
    {
      tag: 'input',
      type: 'radio',
      name: 'implementation',
      'cf-label': 'Medium',
      value: 'medium',
    }, 
    {
      tag: 'input',
      type: 'radio',
      name: 'implementation',
      'cf-label': 'High',
      value: 'high',
    },
    {
      tag: 'input',
      type: 'radio',
      name: 'cost',
      'cf-questions': 'How much money can you spare?',
      'cf-label': 'Low',
      value: 'low',
    }, 
    {
      tag: 'input',
      type: 'radio',
      name: 'cost',
      'cf-label': 'Medium',
      value: 'medium',
    }, 
    {
      tag: 'input',
      type: 'radio',
      name: 'cost',
      'cf-label': 'High',
      value: 'high',
    }
  ];

  const formRef = useRef(null);
  const cfRef = useRef(null); 

  const submitCallback = () => {
    if (cfRef.current) {
      const formDataSerialized = cfRef.current.getFormData(true);
      cfRef.current.addRobotChatResponse("You are done. We find you matches ..");
      setTimeout(()=>{
        window.location.replace("/search");
      }, 1500);
      console.log("Form data, obj:", formDataSerialized);
      // cfRef.current.addRobotChatResponse("You are done. Check the dev console for form data output.");
    }
  };

  useEffect(() => {
    cfRef.current = ConversationalForm.startTheConversation({
      options: {
        submitCallback,
        preventAutoFocus: true,
        showProgressBar: true,
        loadExternalStyleSheet: true,
        robotImage: 'https://images.unsplash.com/photo-1530053969600-caed2596d242?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      tags: formFields
    });

    if (formRef.current) {
      formRef.current.appendChild(cfRef.current.el);
    }

    return () => {
      if (cfRef.current) {
        cfRef.current.remove(); // Cleanup the form when component unmounts
      }
    };
  }, []); 

  return (
    <div ref={formRef}></div>
  );
};

export default ConversationForm;
