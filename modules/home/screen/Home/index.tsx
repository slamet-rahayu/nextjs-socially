import { useEffect } from 'react';
import { ContainerModule } from 'modules/container/screen';
import { StoryComponent, PostComponent } from 'modules/home/components';
import { SearhBar } from 'components';
import { useStartStopChannel } from 'modules/home/hooks';
import { socket } from 'client/socket';
// import { useEffect } from 'react';

export default function HomeComponent() {
  const { dispatchStartChannel } = useStartStopChannel();
  useEffect((): any => {
    dispatchStartChannel();
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
