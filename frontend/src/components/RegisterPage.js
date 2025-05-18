import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { register, authError } = useContext(AuthContext);
  const navigate = useNavigate();

  const validatePasswords = () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return false;
    }
    if (password.length < 5) {
      setPasswordError('Password must be at least 5 characters long');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePasswords()) return;
    setIsLoading(true);

    try {
      const success = await register(email, username, password);
      if (success) navigate('/login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <h1 className="title has-text-centered has-text-info">Buat Akun</h1>
        <div className="box has-background-dark">
          {authError && <div className="notification is-danger">{authError}</div>}
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label has-text-light">Email</label>
              <div className="control">
                <input
                  type="email"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan Email"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label has-text-light">Username</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Masukkan Username"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label has-text-light">Password</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan Password"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label has-text-light">Konfirmasi Password</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Ulangi Password"
                  required
                />
              </div>
              {passwordError && <p className="help is-danger">{passwordError}</p>}
            </div>

            <div className="field">
              <button
                type="submit"
                className="button is-success is-fullwidth"
                disabled={isLoading}
              >
                {isLoading ? 'Mendaftarkan...' : 'Daftar'}
              </button>
            </div>
          </form>
          <div className="has-text-light mt-3">
            Sudah punya akun? <Link to="/login">Login di sini</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
