import { useMutation, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { AVATAR_IMAGE_MUTATION, CUSTOMER_INFO_QUERY } from './gql/customer.gql';

function App() {
  const [image, setImage] = useState('');
  const [uploadImage] = useMutation(AVATAR_IMAGE_MUTATION);
  const { data, refetch } = useQuery(CUSTOMER_INFO_QUERY, {
    fetchPolicy: 'cache-and-network',
  });

  const TIME = 1000;

  const renderInsertImage = () => {
    const getFiles = ({ target: { files } }) => {
      const reader = new FileReader();
      const hasImage = files[0].type && files[0].type.includes(`image`);

      if (hasImage) {
        reader.readAsDataURL(files[0]);
        reader.addEventListener('load', async () => {
          try {
            await uploadImage({
              variables: {
                file: reader.result,
              },
            });
            setTimeout(() => refetch(), TIME);
          } catch (error) {
            console.error(error);
          }
        });
      } else {
        reader.readAsBinaryString(files[0]);
        reader.addEventListener('load', async () => {
          try {
            await uploadImage({
              variables: {
                file: reader.result,
              },
            });
            setTimeout(() => refetch(), TIME);
          } catch (error) {
            console.error(error);
          }
        });
      }
    };

    return (
      <div className="logOutInsertImage">
        <h3>Fazer upload de imagem</h3>
        <input
          type="file"
          id="uploadImage"
          className="logOutInputFile"
          onChange={getFiles}
        />
        <img src={image} width={200} />
        <button onClick={() => refetch()}>Atualizar Imagem</button>
      </div>
    );
  };

  useEffect(() => {
    if (data) setImage(data.customerInfo.customer.avatarImage);
  }, [data]);

  return <div>{renderInsertImage()}</div>;
}

export default App;
