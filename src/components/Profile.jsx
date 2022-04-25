import styled from 'styled-components';

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: car(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  max-width: 280px;
  max-height: 280px;
`;


export const Profile = (props) => {
  return (
    <Wrapper>
      <ProfileRepo>Repositories ({RepoNum})</ProfileRepo>
      <ProfileImage src={img} alt={name} />
      <ProfileName>{name}</ProfileName>
      <ProfileLink>{name}</ProfileLink>
    </Wrapper>
  );
};