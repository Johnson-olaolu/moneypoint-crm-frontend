import React from 'react'

interface IMCustomModalElement {
    isSuccess : boolean,
    title : string
    text : string
    onClose : () => void
    onCloseText : string
}

const MCustomModalElement: React.FC<IMCustomModalElement> = ( props) => {
    const {isSuccess, onClose,onCloseText,text, title} = props
  return (
    <div className='w-64 rounded-xl bg-white overflow-hidden'>
        <div className=" p-6 border-b border-gray-200">
            <img src={require("../../assets/images/modal-success.svg").default} alt=""  className=' mx-auto'/>
            <div className=" mt-5 text-center space-y-6">
                <h6 className=" text-sm text-gray-800 font-medium">{title}</h6>
                <p className=" text-xs text-gray-400 ">{text}</p>
            </div>
        </div>
        <div className=" h-14 flex justify-center items-center">
            <button onClick={onClose} className=' font-medium text-sm text-moneypoint-blue'>{onCloseText}</button>
        </div>
    </div>
  )
}

export default MCustomModalElement