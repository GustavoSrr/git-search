import React, { useContext } from 'react'

import { SearchContext } from '../../contexts/search'

import {
  FaGithubAlt,
  FaLink,
  FaTwitter,
  FaMapMarkerAlt,
  FaRegBuilding,
  FaRegEnvelope
} from 'react-icons/fa'

import {
  Container,
  Avatar,
  NickName,
  Login,
  Bio,
  Others
} from './styles'

export const UserInfo: React.FC = () => {
  const { user } = useContext(SearchContext)

  return (
    <Container>
      {user?.login
        ? (
      <>
        <Avatar
          src={user?.avatar}
          alt={`Avatar de ${user?.nickname}`}
          draggable={false}
        />
        {user.nickname ? <NickName>{user.nickname}</NickName> : ''}
        <Login
          href={`https://github.com/${user.login}`}
          target="_blank"
        >
          <FaGithubAlt size="16" />
          {user.login}
        </Login>
        {user.bio ? <Bio>{user.bio}</Bio> : ''}
        <Others>
          {user.location
            ? <div>
              <FaMapMarkerAlt />
              <p>{user.location}</p>
            </div>
            : ''
          }
          {user.email
            ? <div>
              <FaRegEnvelope />
              <p>{user.email}</p>
            </div>
            : ''
          }
          {user.company
            ? <div>
              <FaRegBuilding />
              <p>{user.company}</p>
            </div>
            : ''
          }
          {user.blog
            ? <div>
              <FaLink />
              <a
                href={user.blog}
                target="_blank" rel="noreferrer"
              >
                {user.blog}
              </a>
            </div>
            : ''
          }
          {user.twitter
            ? <div>
              <FaTwitter />
              <a
                href={`https://twitter.com/${user.twitter}`}
              >
                @{user.twitter}
              </a>
            </div>
            : ''
          }
        </Others>
      </>
          )
        : ''}
    </Container>
  )
}
