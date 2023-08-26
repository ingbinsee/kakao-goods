export const getPbImageURL = (item, fileName = 'photo') =>
  `https://kakao-goods.pockethost.io/api/files/${item.collectionId}/${item.id}/${item[fileName]}`;
