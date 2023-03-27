import { ContainerModule } from 'modules/container/screen';
import { StoryComponent, PostComponent } from 'modules/home/components';
import { SearhBar } from 'components';
import { socket } from 'client/socket';
import { useEffect } from 'react';

export default function HomeComponent() {
  useEffect((): any => {
    socket.connect();

    socket.emit('hello', 'bozo');

    socket.on('hello', (res) => {
      console.log({ res });
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <>
      <SearhBar withNotification />
      <ContainerModule>
        <div className="p-4">
          <StoryComponent />
          <PostComponent />
        </div>
      </ContainerModule>
    </>
  );
}
