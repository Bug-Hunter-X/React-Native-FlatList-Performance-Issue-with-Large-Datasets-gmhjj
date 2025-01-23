```javascript
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

const DATA = Array.from({length: 1000}, (_, i) => `Item ${i}`);

const MyComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(DATA);
  }, []);

  const renderItem = ({item}) => (
    <View>
      <Text>{item}</Text>
    </View>
  );
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      />
  );
};

export default MyComponent;
```