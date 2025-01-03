import DoctorsTimeTableHero from "components/Hero/DoctorsTimeTableHero"
import TimeTable from "components/Timetable"

export function Component() {
    return (
       <>
        <DoctorsTimeTableHero />
        <TimeTable />
       </>
    )
}

Component.displayName = 'TimetablePage'