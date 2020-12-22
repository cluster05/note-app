import React from 'react'

const addTag = (props) => {

    return (
        <div className="absolute" style={{ bottom: '16px', right: '16px' }}>
            <div className="flex ">
                <input
                    onChange={props.changeCurrentTagValue}
                    value={props.currentTargetValue}
                    type="text"
                    maxLength="15"
                    className="p-2 mr-4 text-lg text-white border-b-2 border-white rounded bg-black shadow border focus:outline-none w-full " />
                <button
                    onClick={props.addNewTag}
                    className="px-4 py-1 text-2xl bg-white rounded-lg text-black "
                >+</button>
            </div>
        </div>
    )
}

export default addTag
