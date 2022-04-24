import styled from 'styled-components';

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: car(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const ProfileBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const ProfileTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const ProfileList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;

const ProfileListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);
  & > b {
    font-weight: var(--fw-bold);
  }
`;

export const Profile = ({ img, name, info = [], onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <ProfileImage src={img} alt={name} />
      <ProfileBody>
        <ProfileTitle>{name}</ProfileTitle>
        <ProfileList>
          {info.map((el) => (
            <ProfileListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </ProfileListItem>
          ))}
        </ProfileList>
      </ProfileBody>
    </Wrapper>
  );
};