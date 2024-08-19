import TopicCard from '../components/cards/TopicCard';

export default function SearchResultPage() {  
    return (
       <div className="p-10 space-y-10">
            <div>
                <h1 className="text-[40px] font-bold">Hey, here are our recommendations for you</h1>
                <p>Take a look around and see if anything can help you here</p>
            </div>
            <div className="flex flex-wrap gap-10">
                <TopicCard/>
                <TopicCard/>
                <TopicCard/>
                <TopicCard/>
                <TopicCard/>
                <TopicCard/>
                <TopicCard/>
                <TopicCard/>
                <TopicCard/>
                <TopicCard/>
                <TopicCard/>
            </div>
       </div>
    );
}