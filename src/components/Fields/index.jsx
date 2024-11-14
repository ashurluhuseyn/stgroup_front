import React from 'react'
import './field-card.scss'
import arrowRight from '../../assets/images/arrow-right.svg'
import { Link } from 'react-router-dom'

const FieldCard = () => {
  return (
    <div className='field-card'>
        <div className="field-card__content">
            <div className="field-card__content__title">
                <h1>UI/UX Design</h1>
                <p>One powerful online software suite </p>
                <div>
                    <Link to='/fields/1'>
                        <img src={arrowRight} alt="" />
                    </Link>
                </div>
            </div>
            <div className="field-card__content__img">
                <img src="https://s3-alpha-sig.figma.com/img/032f/ebb1/e7358eacb7d59280a14a5a4b60e38855?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IIzpAwH1TedIoOwCNG3iHDtULifZy9jTgNto2HMtKTDgrrcIM6eub2hL10YzryzDaW6UqS8iX8DNRWbojFIXIDYdnVH4Ei~N1pD4h1g-ZqVUX2OsVQjisZGxcz8I9~64gZSfuREN2VXWsRxXHZaWoZTaP0pt6aLLdDb2tFhxLvELeNq21mSwNPIzjipmB0~IlK7LapBbI03~~xehbISRiZpqDnvnYoIBfz5z05gdCfhOfa~MwlcNsOQRn7fntUH9HFCEYKxTQyZAgU8uYliUXJFw75f4m9l6D3bzJ1TizzCiiryBxVksiE66Bi0RqGtQCvXR0ApPds~yXSyqGrAjpA__" alt="" />
            </div>
        </div>
    </div>
  )
}

export default FieldCard