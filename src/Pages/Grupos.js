import React from 'react'
import Grupo from '../Components/Grupo';

class Grupos extends React.Component{
    state = {
        data: [
          {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            grupo: 'TICS 8D adf',
            turno: 'matutino',
            avatarUrl:
              'https://s.gravatar.com/avatar/b77d33eab327dd8f65232bad74dc8de6?s=80',
          },
          {
            id: '2de30c42-9deb-40fc-05e62b5939a7',
            grupo: 'TICS 5D adf',
            turno: 'matutino',
            avatarUrl:
            'https://s.gravatar.com/avatar/b77d33eab327dd8f65232bad74dc8de6?s=80',
          },
          {
            id: '2de30c42-40fc-a41f-05e62b5939a7',
            grupo: 'ELE 8A adf',
            turno: 'matutino',
            avatarUrl:
            'https://s.gravatar.com/avatar/b77d33eab327dd8f65232bad74dc8de6?s=80',
           },
          {
            id: '9deb-40fc-a41f-05e62b5939a7',
            grupo: 'ADM 1D adf',
            turno: 'vESPERTINO',
            avatarUrl:
            'https://s.gravatar.com/avatar/b77d33eab327dd8f65232bad74dc8de6?s=80',
          },
       
        ],
      };

      
    render() {
        return (
          <div >
            <ul >
              {this.props.badges.map(badge => {
                return (
                  <li key={badge.id}>
                    <Grupo badge={badge} />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
    }

export default Grupos