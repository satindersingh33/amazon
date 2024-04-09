
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'; 
import { Modal } from 'bootstrap'; 
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [redirect, setRedirect] = useState(false); 

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
    setErrorMessage('');
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    setErrorMessage('');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorMessage("New password and confirm password don't match");
    } else {
      console.log('Password updated successfully');
      setRedirect(true);
      const successModal = new Modal(document.getElementById('successModal'));
      successModal.show();
    }
  };

  if (redirect) {
    return <Navigate to="/signup" />;
  }

  return (
    <div className="forgot-password-container">
      <h3>Reset Your Password</h3>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>Old Password:</label>
        <input
          type="password"
          value={oldPassword}
          onChange={handleOldPasswordChange}
          required
        />
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={handleNewPasswordChange}
          required
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        <button type="submit">Reset Password</button>
      </form>

      {/* Bootstrap modal for success message */}
      <div className="modal fade" id="successModal" tabIndex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="successModalLabel">Success</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Password changed successfully!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

// // ForgotPassword.js

// import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom'; // Import Navigate component for navigation
// import axios from 'axios'; // Import axios for making HTTP requests
// import { Modal } from 'bootstrap'; // Import Modal component from Bootstrap
// import './ForgotPassword.css';

// const ForgotPassword = () => {
//   const [oldPassword, setOldPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [redirect, setRedirect] = useState(false); // State for navigation

//   const handleOldPasswordChange = (e) => {
//     setOldPassword(e.target.value);
//     setErrorMessage('');
//   };

//   const handleNewPasswordChange = (e) => {
//     setNewPassword(e.target.value);
//     setErrorMessage('');
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//     setErrorMessage('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (newPassword !== confirmPassword) {
//       setErrorMessage("New password and confirm password don't match");
//     } else {
//       try {
//         // Make HTTP request to update password
//         const response = await axios.put(`/api/users/${userId}/password`, {
//           oldPassword,
//           newPassword,
//         });
//         console.log(response.data); // Assuming your backend returns a success message

//         // Redirect to sign-in page
//         setRedirect(true);
//         // Show Bootstrap modal for success message
//         const successModal = new Modal(document.getElementById('successModal'));
//         successModal.show();
//       } catch (error) {
//         console.error(error.response.data); // Log any error messages from the backend
//         setErrorMessage('Failed to update password. Please try again.');
//       }
//     }
//   };

//   if (redirect) {
//     return <Navigate to="/signup" />;
//   }

//   return (
//     <div className="forgot-password-container">
//       <h3>Reset Your Password</h3>
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//       <form onSubmit={handleSubmit}>
//         <label>Old Password:</label>
//         <input
//           type="password"
//           value={oldPassword}
//           onChange={handleOldPasswordChange}
//           required
//         />
//         <label>New Password:</label>
//         <input
//           type="password"
//           value={newPassword}
//           onChange={handleNewPasswordChange}
//           required
//         />
//         <label>Confirm Password:</label>
//         <input
//           type="password"
//           value={confirmPassword}
//           onChange={handleConfirmPasswordChange}
//           required
//         />
//         <button type="submit">Reset Password</button>
//       </form>

//       {/* Bootstrap modal for success message */}
//       <div className="modal fade" id="successModal" tabIndex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="successModalLabel">Success</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               Password changed successfully!
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;
