import React from 'react'
const Logistic_resgression = ({setKey,changeLogisticPenalty,changeLogisticClassWeight,changeLogisticRandomState,changeLogisticMaxIter}) => {
    function changePenalty(key,value)
        {
            changeLogisticPenalty(key,value)
        }
  return (
    <div className='flex flex-col h-72 w-44 border-2 p-2 bg-blue-200 gap-1' key={setKey}>
        Logistic Resgression
        <p className='self-start'>Penalty</p>
        
        <select name="penalty" id="penalty" className='border-1' onChange={e=>changePenalty(setKey,e.target.value)}>
            <option value="L2">L2</option>
            <option value="none">none</option>
        </select>
        <p className='self-start'>Class Weight</p>
        <select name="class weight" id="class weight" className='border-1' onChange={e=>changeLogisticClassWeight(setKey,e.target.value)}>
            <option value="L2">balanced</option>
            <option value="none">none</option>
        </select>
        <p className='self-start'>Random State</p>
        <input type='number' onChange={e=>changeLogisticRandomState(setKey,e.target.value)}></input>
        <p className='self-start'>Max Iteration</p>
        <input type='number' onChange={e=>changeLogisticMaxIter(setKey,e.target.value)}></input>
    </div>
  )
}

export default Logistic_resgression