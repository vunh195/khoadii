import './App.css';
import Right from './Right';
import React from 'react';
function App() {
    const [isHiddenLeft, setIsHiddenLeft] = React.useState(true);
	const [isHiddenRight, setIsHiddenRight] = React.useState(false);
	
	return <div className="login">
		<div className="login-wrapper">
			<Right isLeft={true} isHidden={isHiddenLeft} setIsHiddenLeft={setIsHiddenLeft} setIsHiddenRight={setIsHiddenRight} />	
			<Right isLeft={false} isHidden={isHiddenRight}setIsHiddenLeft={setIsHiddenLeft} setIsHiddenRight={setIsHiddenRight}  />
		</div>
	</div>
}

export default App;
