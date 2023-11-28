import {useParams} from 'react-router-dom';

const EventDetailPage = () => {
    const params = useParams();
    console.log(params);

    return (
        <div>
            <h1>Event Details</h1>
            <p>id: {params.id}</p>
        </div>
    )
};

export default EventDetailPage;