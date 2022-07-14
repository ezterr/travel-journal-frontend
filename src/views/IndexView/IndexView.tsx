import React from 'react';
import { ForbiddenWindow } from '../../components/ForbiddenWindow/ForbiddenWindow';
import { useApi } from '../../hooks/useApi';
import { apiUrl } from '../../config';
import { useUser } from '../../hooks/useUser';
import './IndexView.css';
import { PostIndex } from '../../components/PostIndex/PostIndex';

export function IndexView() {
  const user = useUser();
  const [indexStatus, indexBody] = useApi<any>(`${apiUrl}/api/user/${user?.id ?? ''}/index`);

  console.log(indexBody);
  return (
    <main className="IndexView">
      <section className="IndexView__window">
        <div className="IndexView__container">
          {
            indexStatus === 200 && indexBody && !('error' in indexBody) ? indexBody.map((e: any) => (
              <PostIndex
                key={e.id}
                postTitle={e.title}
                postPhotoUrl={`${apiUrl}${e.photo}`}
                postDestination={e.destination}
                postCreatedAt={new Date(e.createdAt)}
                postDescription={e.description}
                userFirstName={e.user.firstName}
                userLastName={e.user.lastName}
                userPhotoUrl={e.user.avatar}
                userId={e.user.id}
                travelId={e.travelId}
              />
            )) : (indexStatus !== null) && <ForbiddenWindow />
          }
        </div>
      </section>
    </main>
  );
}
