import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
const localizer = momentLocalizer(moment) // or globalizeLocalizer
import "react-big-calendar/lib/css/react-big-calendar.css"

const CAlendar = () => {
    const events = [
        {
            title: 'All Day Event very long title',
            allDay: false,
            start: moment("2024-03-19T10:00:00").toDate(),
            end: moment("2024-03-19T15:00:00").toDate()
        },
        {
            title: 'All Day Event very2 long title',
            allDay: true,
            start: moment("2024-03-20T10:00:00").toDate(),
            end: moment("2024-03-19T15:00:00").toDate()
        },
        {
            title: 'All Day Event very long title',
            allDay: true,
            start: moment("2024-03-19T5:00:00").toDate(),
            end: moment("2024-03-19T15:00:00").toDate()
        },

        {
            title: 'All Day Event very long title',
            allDay: true,
            start: moment("2024-03-19T8:00:00").toDate(),
            end: moment("2024-03-19T15:00:00").toDate()
        },


    ]
    return (
        <div className="p-5 " >
            <div className="h-screen bg-white p-2 rounded-lg">
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                />
            </div>
        </div>
    )
}

export default CAlendar
