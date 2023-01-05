import { ContainerModule } from 'modules/container/screen';
import { SearchComponent, StoryComponent, PostComponent } from 'modules/home/components';

export default function HomeComponent() {
  return (
    <ContainerModule>
      <SearchComponent />
      <StoryComponent />
      <PostComponent />
    </ContainerModule>
  );
}
