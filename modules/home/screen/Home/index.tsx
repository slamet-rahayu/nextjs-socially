import { ContainerModule } from 'modules/container/screen';
import { StoryComponent, PostComponent } from 'modules/home/components';
import { SearhBar } from 'components';

export default function HomeComponent() {
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
