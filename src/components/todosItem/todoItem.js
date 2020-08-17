import React, { useEffect, useState } from 'react';

import { TodoTouchable, CheckBox, Title } from './styles';

export default function UserCards({ item }) {
  const [iconName, setIcon] = useState('square-o');
  const [backgroundClr, setBackgroundClr] = useState('#fff');


  function setIconName() {
    if (item.completed) {
      setIcon('check-square-o');
      setBackgroundClr('#f6b93b');
    }
  }

  useEffect(() => {
    setIconName();
  }, []);

  function setValue() {
    if (iconName === 'square-o') {
      setIcon('check-square-o');
      setBackgroundClr('#f6b93b');
    } else {
      setIcon('square-o');
      setBackgroundClr('#fff');
    }
  }

  return (
    <TodoTouchable style={{ backgroundColor: backgroundClr }} underlayColor='#f2f2f2' onPress={() => { setValue(); }}>
      <>
        <CheckBox name={iconName} size={27} />
        <Title>{item.title}</Title>
      </>
    </TodoTouchable>
  );
}