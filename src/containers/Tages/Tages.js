import React from 'react'
import Tag from './Tag/Tag';
import AddTag from './AddTag/AddTag';

const tags = (props) => {

    return (
        <div className="relative py-5 bg-black h-full">
            <div>
                {
                    props.tagArray.map(tag => <Tag
                        key={tag.id}
                        title={tag.title}
                        deleteTask={() => props.deleteTask(tag)}
                    />
                    )
                }
            </div>
            <AddTag
                currentTargetValue={props.currentTargetValue}
                addNewTag={props.addNewTag}
                changeCurrentTagValue={props.changeCurrentTagValue} />
        </div>
    )
}

export default tags
