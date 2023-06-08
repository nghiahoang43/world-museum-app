import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import './Solution.css'

const ChosenSolution = ({ chosenSolution }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="sol-chosen">
        <span>{chosenSolution.name}</span>
        <span><span>by </span><span>{chosenSolution.author}</span></span>
        <span>{chosenSolution.solution}{chosenSolution.solution}</span>
        <div onClick={showModal}><span>Explain</span></div>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={1000}>
        <h2>{`${chosenSolution.name}`}</h2>
        <div className="discuss-body">
        {chosenSolution.discuss}
        </div>
        <span>-{chosenSolution.author}-</span>
      </Modal>
    </>

  )
}

export default ChosenSolution