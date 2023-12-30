import React, { useEffect, useState } from 'react';
import { createItem,getItems } from './Api.tsx';
const App: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  
  useEffect(() => {
    
    const fetchItems = async () => {
      try {
        const data = await getItems();
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems();
  }, []);

  const handleCreateItem = async () => {
    try {
      const newItem = { id: 3,
      conteuDePost: "Conteudo do post 3" };
      const createdItem = await createItem(newItem);
      setItems([...items, createdItem]);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      
      <button onClick={handleCreateItem}>Criar Novo Item</button>
    </div>
  );
};

export default App;