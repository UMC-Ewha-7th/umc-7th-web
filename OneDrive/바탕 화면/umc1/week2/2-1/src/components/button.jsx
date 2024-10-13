import React from 'react';

function Button({ onClick, text }) {
    return (
        <button className="todo-button" onClick={onClick}>  {/* 버튼 스타일 클래스 */}
            {text}
        </button>
    );
}

export default Button;