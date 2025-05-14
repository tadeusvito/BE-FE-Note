import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login, authError, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);
    try {
      const success = await login(email, password);
      if (success) {
        navigate('/');
      } else {
        setErrorMessage('Gagal login. Periksa kembali email dan password Anda.');
      }
    } catch (err) {
      setErrorMessage('Terjadi kesalahan saat login. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  const getDisplayError = () => {
    return errorMessage || authError || '';
  };

  return (
    <div className="columns is-centered mt-6">
      <div className="column is-one-third">
        <div className="box has-background-dark">
          <h1 className="title has-text-centered has-text-light">Masuk ke NoteX</h1>
          <p className="has-text-centered has-text-grey-light mb-4">Silakan masuk untuk mengelola catatan Anda</p>

          {getDisplayError() && (
            <div className="notification is-danger is-light">
              {getDisplayError()}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="field">
              <label className="label has-text-light">Email</label>
              <div className="control">
                <input
                  type="email"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email Anda"
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
                  placeholder="Masukkan password"
                  required
                />
              </div>
            </div>

            <div className="field mt-4">
              <div className="control">
                <button
                  type="submit"
                  className={`button is-link is-fullwidth ${isLoading ? 'is-loading' : ''}`}
                >
                  Masuk
                </button>
              </div>
            </div>
          </form>

          <p className="has-text-centered has-text-grey-light mt-4">
            Belum punya akun? <Link to="/register">Daftar Sekarang</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
