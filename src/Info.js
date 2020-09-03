/* import React, {useState, useEffect} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() =>{
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        };
    }); 
    
    const onChangeName = e =>{
        setName(e.target.value);
    };
    const onChangeNickname = e =>{
        setNickname(e.target.value);
    }

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <b>이름:</b>{name}
            </div>
            <div>
                <b>닉네임:</b>{nickname}
            </div>
        </div>
    );
};

export default Info; */
import React, {useReducer} from 'react';

function reducer(state, action){
    return{
        ...state,
        [action.name]: action.value
    };
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname:'',
        age: ''
    });


const {name , nickname ,age} = state;
const onChange = e => {
    dispatch(e.target)
};

return(
    <div>
        <div>
            <div>
                <input name = "name" value = { name } onChange = { onChange }/>
                <input name = "nickname" value = { nickname } onChange = { onChange }/>
                <input name = "age" value = {age} onChange = { onChange} />
            </div>
        </div>
        <div>
            <div>
                <b>이름:</b>{name}
            </div>
            <div>
                <b>닉네임:</b>{nickname}
            </div>
            <div>
                <b>나이:</b> {age}
            </div>
        </div>
    </div>
  );
};

export default Info;
