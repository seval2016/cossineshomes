import React from 'react';
import "./section-title.scss"

const SectionTitle = ({title,subTitle}) => {
  return (
    <div className='mb-5'>
          <h3 className='section-title'>{title}</h3>
          <span className='section-subTitle'>{subTitle}</span>
    </div>
  )
}

export default SectionTitle