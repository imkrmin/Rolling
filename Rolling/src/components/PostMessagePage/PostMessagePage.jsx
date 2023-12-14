import SenderName from './SenderName';
import MessageProfileImage from './MessageProfileImage';
import Relationships from './Relationships';
import EnterContent from './EnterContent';
import FontChange from './FontChange';

function PostMessagePage() {
  return (
    <div className="mt-14 mb-14 mx-auto max-w-[1080px] flex flex-col">
      <form>
        <SenderName></SenderName>
        <MessageProfileImage></MessageProfileImage>
        <Relationships></Relationships>
        <EnterContent></EnterContent>
        <FontChange></FontChange>
      </form>
    </div>
  );
}

export default PostMessagePage;
