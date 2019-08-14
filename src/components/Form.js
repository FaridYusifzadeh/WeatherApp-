import React from 'react';

const Form = props => (
    <div>
        <form onSubmit={props.weatherMethod} >
            <input type="text" name="city" placeholder="Şəhər" />
            <button>Şəhəri əldə et</button>
        </form>
    </div>
)

export default Form;