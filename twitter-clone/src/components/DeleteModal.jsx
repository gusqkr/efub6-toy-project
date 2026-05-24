// src/components/EditProfileModal.jsx
import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: black;
  border-radius: 16px;
  width: 500px;
  max-width: 90%;
  padding: 20px;
  position: relative;
  color: white;
  border: 1px solid black;
`;
const DeleteButton = styled.button`
  background-color: red;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  width: 70%;
  height: 40px;
  margin-bottom: 10px;
`;

const CancelButton = styled.button`
  background-color: black;
  border: solid 1px white;
  border-radius: 20px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  width: 70%;
  height: 40px;
`;

const ModalText = styled.p`
  padding: 10px;
`;

function EditProfileModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h3>Delete post?</h3>
        <ModalText>
          This can't be undone and it will be removed from your profile, the
          timeline of any accounts that follow you, and from search results.
        </ModalText>
        <DeleteButton>Delete</DeleteButton>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
      </ModalContent>
    </ModalOverlay>
  );
}

export default EditProfileModal;
