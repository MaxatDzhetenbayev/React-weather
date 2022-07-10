import React from 'react'
import Select from 'react-select'
import GlobalSvgSeletcor from '../../assets/icons/global/GlobalSvgSelector'
import s from './Header.module.scss'

type Props = {}

export const Header = (props: Props) => {

   const options = [
      { value: 'sity-1', label: 'Семей' },
      { value: 'sity-2', label: 'Алматы' },
      { value: 'sity-3', label: 'Астана' },
   ]

   const colourStyles = {
      control: (styles: any) => ({
         ...styles,
         backgroundColor: '#4793FF33',
         borderRadius: '10px',
         border: 'none',
         cursor: 'pounter',

      })
   }


   return (

      <header className={s.header}>
         <div className={s.wrapper}>
            <div className={s.logo}><GlobalSvgSeletcor id={'header-logo'} /></div>
            <div className={s.title}>React weather</div>
         </div>
         <div className={s.wrapper}>
            <button className={s.change_theme}><GlobalSvgSeletcor id={'change-theme'} /></button>
            <div className={s.select_wrapper}><Select defaultValue={options[0]} styles={colourStyles} className={s.select} options={options} /></div>
         </div>
      </header>

   )
}