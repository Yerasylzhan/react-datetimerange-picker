import { useEffect, useRef, useState } from 'react'
import { DateRangePicker } from 'react-date-range' // npm install react-date-range
import ru from 'date-fns/locale/ru';
import { defaultStaticRanges } from 'react-date-range';


/*  import {
  endOfDay,
  startOfDay,
  startOfYear,
  startOfMonth,
  endOfMonth,
  endOfYear,
  addMonths,
  addYears,
  startOfWeek,
  endOfWeek,
  isSameDay,
  differenceInCalendarDays
} from "date-fns"; */ 


import format from 'date-fns/format'
import { addDays } from 'date-fns'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const DateRangePickerComp = () => {

  // date state
 

  const [range, setRange] = useState([
    {
      endDate: new Date(),
      startDate: addDays(new Date(), -1),
      key: 'selection'

        //startTimeHour: (addDays(new Date(), -1)).getHours(),
      // endTimeHour: (new Date()).getHours(),
    }
  ])

  // open close
   const [open, setOpen] = useState(false)

  // get the target element to toggle 
  const refOne = useRef(null)

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutside, true)
  }, [])

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if( e.key === "Escape" ) {
      setOpen(false)
    }
  }

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if( refOne.current && !refOne.current.contains(e.target) ) {
      setOpen(false)
    }
  } 


  let startTimeStamp = range[0].startDate.getTime();   // timestamps in miliseconds for start date
  let endTimeStamp = range[0].endDate.getTime();

   console.log(startTimeStamp);
   console.log(endTimeStamp);
   console.log(endTimeStamp - startTimeStamp); 

      defaultStaticRanges[0].label = "Сегодня"
      defaultStaticRanges[1].label = "Вчера"
      defaultStaticRanges[2].label = "Эта неделя"
      defaultStaticRanges[3].label = "Прошлая неделя"
      defaultStaticRanges[4].label = "Этот месяц"
      defaultStaticRanges[5].label = "Прошлый месяц"
    
         
  return (

    <div className="calendarWrap">   

      <input style={{width:"20em", textAlign:'center'}}
        value={`${format(range[0].startDate, "MM/dd/yyyy HH:mm")} to ${format(range[0].endDate, "MM/dd/yyyy HH:mm")}`}
        readOnly
        className="inputBox"
         onClick={ () => setOpen(open => !open) } 
      />

      
      <div ref={refOne}>

        {open &&
        
          <DateRangePicker
          dateDisplayFormat='dd/MMM/yy - HH:mm:ss'
            
            onChange={item => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            className="calendarElement"
            
            locale = {ru}
            inputRanges={[]}
            //staticRanges={[]}
            //maxDate = {new Date()}

            autoApply = {false}    
            hasCustomRendering = {true}     
            weekStartsOn = {0}  // on Monday
            autoUpdateInput = {false}

            timePicker = {true}
            timePickerSeconds = {true}
            timePicker24Hour = {true}
          


               staticRanges={[ 

              {
                label: <h3>Вывод данных за период:</h3>,
                range: () => ({
                  startDate: new Date(),
                  endDate: new Date()
                }),
                isSelected(range) {
                 
                  return (
                    0
                  );
                }
              },
              ...defaultStaticRanges
              
            ]}
          
          /> 
}
      </div>
          
         
    </div>

  )
}

export default DateRangePickerComp