import React, { useState, useContext } from 'react';
import useForm from "react-hook-form";
import axios from 'axios';
import UserContext from '../UserContext';
import Loader from '../components/Loader';
import { Redirect } from "react-router-dom";

const GithubLogin = () => {
    const userContext = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);

    const { handleSubmit, errors, register } = useForm();
    const onSubmit = values => {
        setIsLoading(true);
        const getUser = async () => {
            await axios(`https://api.github.com/users/${values.username}`)
                .then(function (response) {
                    const { data } = response;
                    userContext.setIsAuthenticated(true, data);
                })
                .catch(function (error) {
                    console.log(error);
                    setIsLoading(false);
                });
        }
        getUser();
    };

    if (userContext.isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <div className="login-form">
            {isLoading ? <Loader /> : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h4>Type github username to continue</h4>
                    <div className="login-form__element">
                        <input
                            name="username"
                            placeholder="Username"
                            ref={register({ required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                    <div className="todo-form__element todo-form__element--submit">
                        <button type="submit">Continue</button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default GithubLogin;