import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils";

import Auth from "../utils/auth";

const Login = (props) => {
    const [formState, SetFormState] = useState({ email: '', password: '' });
    const [Login, { error, data }] = useMutation(LOGIN_USER);


const handleChange = (event) => {
    const { name, value } = event.target;

    SetFormState({
        ...formState,
        [name]: value,
    });
};

const handleFormSubmit = async(event) => {
    event.preventDefault();
    console.log(formState);
    try {
        const { data } = await Login({
            variables: { formState },
        });

        Auth.login(data.login.token);
    } catch (e) {
        console.error(e);
    }

    SetFormState({
        email: '',
        password: '',
    });
};

return ( 
    <div class="tab-content">
    <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
        <form>
            <div class="text-center mb-3">
                <p>Sign in with:</p>
                <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-twitter"></i>
          </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-github"></i>
          </button>
            </div>

            <p class="text-center">or:</p>

          
            <div class="form-outline mb-4">
                <input onChange={handleChange} value={formState.email} name="email" type="email" id="loginName" class="form-control" />
                <label class="form-label" for="loginName">Email or username</label>
            </div>

            
            <div class="form-outline mb-4">
                <input onChange={handleChange} value={formState.password} name="password" type="password" id="loginPassword" class="form-control" />
                <label class="form-label" for="loginPassword">Password</label>
            </div>

            
            <div class="row mb-4">
                <div class="col-md-6 d-flex justify-content-center">
                    
                    <div class="form-check mb-3 mb-md-0">
                        <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                        <label class="form-check-label" for="loginCheck"> Remember me </label>
                    </div>
                </div>

                <div class="col-md-6 d-flex justify-content-center">
                    
                    <a href="#!">Forgot password?</a>
                </div>
            </div>

            
            <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

            
            <div class="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
            </div>
        </form>
    </div>
    <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
        <form>
            <div class="text-center mb-3">
                <p>Sign up with:</p>
                <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-twitter"></i>
          </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-github"></i>
          </button>
            </div>

            <p class="text-center">or:</p>

            
            <div class="form-outline mb-4">
                <input type="text" id="registerName" class="form-control" />
                <label class="form-label" for="registerName">Name</label>
            </div>

            
            <div class="form-outline mb-4">
                <input type="text" id="registerUsername" class="form-control" />
                <label class="form-label" for="registerUsername">Username</label>
            </div>

            
            <div class="form-outline mb-4">
                <input type="email" id="registerEmail" class="form-control" />
                <label class="form-label" for="registerEmail">Email</label>
            </div>

            
            <div class="form-outline mb-4">
                <input type="password" id="registerPassword" class="form-control" />
                <label class="form-label" for="registerPassword">Password</label>
            </div>

            
            <div class="form-outline mb-4">
                <input type="password" id="registerRepeatPassword" class="form-control" />
                <label class="form-label" for="registerRepeatPassword">Repeat password</label>
            </div>

            
            <div class="form-check d-flex justify-content-center mb-4">
                <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked aria-describedby="registerCheckHelpText" />
                <label class="form-check-label" for="registerCheck">
            I have read and agree to the terms
          </label>
            </div>

            
            <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
        </form>
    </div>
</div>
);
}

export default Login;