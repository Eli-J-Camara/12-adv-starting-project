import { Link, Outlet, useParams } from 'react-router-dom';
import classes from './EventsPage.module.css';

const EventsPage = () => {
    const params = useParams();
    const DUMMY_EVENTS = [
        { 
            title: 'Nussbaum Dinner', 
            date: '11/9/23', 
            description: 'Some shit going on at the Indianapolis Zoo.', 
            id:'1'
        },
        { 
            title: 'Life Science Summit', 
            date: '11/8/23', 
            description: 'Science is fun?', 
            id:'2'
        },
        { 
            title: 'Colts v Pats - Watch Party', 
            date: '11/11/23', 
            description: 'Der Klassikur: the corn-fed midwestern America version. lolz', 
            id:'3'
        },
    ]
    return (
        <div>
            {!params.id ? (<ul>
                {DUMMY_EVENTS.map((event) => (
                    <li className={classes.event} id={event.id}>
                        <span>
                            <Link to={event.id}><h2>{event.title}</h2></Link>
                            <p>{event.date}</p>
                        </span>
                        <p className={classes.description}>{event.description}</p>
                    </li>
                ))}
            </ul>
            ) : (
                <Outlet />
            )}
        </div>
    )
};

export default EventsPage;