import React from 'react'
import './choose.scss'

import chooseIcon from '../../assets/images/chooseIcon.svg'
import chooseVector from '../../assets/images/choose-vector.png'

const ChooseUs = () => {
  return (
    <div className='choose'>
        <div className="choose-wrap">
            <div className="choose-img">
                <img src={chooseVector} alt="" />
                <img src='https://s3-alpha-sig.figma.com/img/c07e/9cb5/abf5ba097a9d6a1edb75eb4c8c84c2d1?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMSh5scrsak2lVKt4JgBksLt6tdwIkaNSxdtDFt1cdcbbVgG6vj1gzTRoacSM3WbvCwZsxnxw4gne3Oc4Okgb9mwLxab11BciyUzV28hSTMun1GcR24uGhOhl6vYJNDmjLaojd6L8OMqR5VTmKZlfRZ4rYnCDpYwPFVpmhBediIHjsaNPPQvTqoUXE36rhOgMDxOCGHMr1MNmavvJfpudhX7XhZa68OFAEbUpElA~wNMEtsjI8FZcy~NyuP0Lxds~YbT0crhibIBOjfYyb8MHWsWRl-CjlN7~PzWh~tXBpTPRjlmQfrEm6ORrVBq1A-aEWLaCMG8L2xBRQtg3rcnzQ__' alt="" />
            </div>
            <div className="choose-content">
                <h1>Niyə bizi seçirlər?</h1>
                <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
                </p>
                <ul className="choose-content-items">
                    <li>
                        <img src={chooseIcon} alt="" />
                        <span>Expert Instruction</span>
                    </li>
                    <li>
                        <img src={chooseIcon} alt="" />
                        <span>Expert Instruction</span>
                    </li>
                    <li>
                        <img src={chooseIcon} alt="" />
                        <span>Expert Instruction</span>
                    </li>
                    <li>
                        <img src={chooseIcon} alt="" />
                        <span>Expert Instruction</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs