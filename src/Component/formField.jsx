import React, { useState } from 'react';
import Box from "@mui/material/Box";
import { TextField } from '@mui/material';
import email_icon from '../assets/email.png';
import lock from '../assets/lock.png';
import { useNavigate } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
const FormField = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');


    const redirecToPRoductPage = () => {
        axios.post('http://localhost:8080/insert', {
            email: email,
            password: pwd
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
        navigate('/product');
    }


    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePwdChange = (event) => {
        setPwd(event.target.value);
    }
    console.log(pwd);

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25%' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className='email d-flex w-100'>
                <img src={email_icon} alt='email' className='mx-3' style={{ width: '6%' }} />
                <TextField id='filled-basic' label='Email ID' variant='filled' onChange={handleEmailChange} />
            </div>
            <div className='pwd d-flex w-100'>
                <img src={lock} alt='lock' className='mx-3' style={{ width: '7%' }} />
                <FormControl variant='filled'>
                    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                    <FilledInput id="filled-adornment-password" onChange={handlePwdChange}
                        type={showPassword ? 'text' : 'password'} endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }></FilledInput>
                </FormControl>
            </div>
            <button className='btn btn-large custom-btn shadow-lg text-light' onClick={redirecToPRoductPage}><h4>Login</h4></button>

        </Box>
    )
}

export default FormField
