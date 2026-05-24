import styled from "styled-components";
import { FaArrowLeftLong } from "react-icons/fa6";

const ProfileContainer = styled.div`
  position: relative;
`;
const ProfileHeader = styled.div`
  display: flex;
  gap: 20px;
  padding: 5px 15px;
  align-items: center;
  background-color: black;
`;

const BackIcon = styled(FaArrowLeftLong)`
  color: white;
  font-size: 18px;
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.p`
  font-size: 13px;
  color: white;
  font-weight: 600;
`;

const NumOfPost = styled.p`
  font-size: 10px;
  color: #9a9a9a;
`;

const BgImage = styled.div`
  height: 200px;
  background-color: #9a9a9a;
`;

const UserInfo = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
`;
const RightSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding: 10px;
`;
const EditButton = styled.button`
  background-color: transparent;
  border: solid 1px white;
  border-radius: 20px;
  color: white;
  font-size: 13px;
  font-weight: 600;
  padding: 5px 10px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  text-align: left;
  padding: 10px;
`;

const GrayText = styled.p`
  font-size: 10px;
  color: #9a9a9a;
`;
const WhiteText = styled.p`
  font-size: 10px;
  font-weight: 600;
  color: white;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -4.3px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background-color: #32c5ff;
    border-radius: 20px;
  }
`;

const TabBar = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 5px;
  border-bottom: solid 1px #9a9a9a;
`;

const Profile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: solid 4px black;
  position: absolute;
  top: 200px;
  left: 20px;
`;

const ProfileSection = () => {
  return (
    <ProfileContainer>
      <Profile
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIVFhUVFRUVFRUVFRcVFRUVFRUWFhUVFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAQIDBAUGBwj/xAA3EAACAgECAwQJAwQCAwEAAAAAAQIRAwQhEjFBBVFhcQYHExQigZGhsTLR8EJyweEzUkOCshX/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAQIDBAUG/8QALREBAAICAQMDBAICAgMBAAAAAAECAxEEEiExE0FRBRQiMiNxM2GRsUJSgRX/2gAMAwEAAhEDEQA/APdJHqvA0KIHQUqKCggClQQgGwplAkQNoAogAAuwMgAEkAwFRQUAqKmiaAdEUBBQUMBsoK8yG0iAAAAAoBIoTAAAAoBkAgGFIIYUghhSCAKABoIKLtSG0AAAAFAAAQTAKCmwaKgCgEECCkggCiggYUwBgNAJANBRFAiGjDpZPoYTeIbK4plqx9nd5rnK3V47Rj0MV0Nc5JbowxC5aWPcjHrllGODelj3InXK+nX4RnpIvmixeYYzirLNm7MXQ2Rl+Wq3HifDBn0com6t4lz3xTVnozahQQILoUDSVEXRoi6BkgIpUEJlTRUAIAAaQUBCoGjoGgF0aRDSePE5ckYzOmdazPh1NLo0uZovk268eHXlsjjNUy3xVYoGO2WklEm10KGzR8IXQ4QnSi4iJJqjLEnzMotpjNYlh1XZye65m2uWYaMmCJ8OVlxOLpo6YtuHFanTOkKMkKgmkiKCKAgaEEkVBQBRQEUFQqAaQAiSGjGbVjzLKKz8G4mqeTir5tDZGHJPispQxt+HmY/d4fa8Mvt8n/rLr6TT0jC2WLeJdNMXTHhtjE1zLfEJIxUwoEoBEKYWCZFACoqaATTndp6e1a6HRiv7OTPj33hyHE6XEXCDUgICqdEQmiroyIVBQUFBJFACRryZa446rTqGVKTadVja6Glk/Dz/AGPJ5H1nHXtjjqd+L6def3nTRDSJc9zx831PkZP/AC1H+no4+Fip7bXLGu5fQ4Zvae8y6YrEeISIoIFwrpt5bfgzi96+JSYifKcMslyl9dzpx87NT32wnDWfZoxavpJV4/0/6PS4/wBQpftftLnvgmPHdpW56MTvvDRMSdF8oB4UyLBBQAAIJKM42qMonTGY3GmRaKK6Gz1JafQql7tHu/JPUlfRq4aR2vNIqGRSKAgEA6AVAShBvlzOXlcvHx67v/w34cF8s6q3YMCjz3Z8nyuXfkW3bx8PdwYK4q6j/lccjeTLoFkAADwEA7ATZA8cnB3H5x6P9mdXH5V8M9vHwwvji0N2n1MZ8tn1T5o97ByaZo/Hz8OO+OaeV1nQwAAFAAAmWElGTKINgIGnnj0HjEwCgAAAEA0gHFXsaORyK4aTezbhxWy36Yb8OPhX5PjORntnvN7PosWKMdYrCw0NoCAQAKRBxPST0mxaSLv4pqPFwq9laXFKlstzpw4JyTDXa2nybtH1l6pzUuNQr/xx+GOz3t8+V9Xz8D1KcKkQ0TllzY+snVwncMkpRUuJcUt6fNN78WzXkbPsccx3Y+rL1HZPrmuUY59O6bSlKDV/3JN/b+PmyfTe0zWWyuf5fVOzO0sWogsmKXFH7p9zXRnlWpNZ1LfE7aJRafEua+/gXFknHaLQWiLRqXR02fjV/VH0vHzxmp1Q4clJpOlp0MIMgAoCItmQgyiIUgOC0dzxhQCooVEQUVTQQgNWkh1+h8l9V5E5M3THir3uDiimPfvLUeW7QAAKhoMDlek3bMNJgllnOMXVQ4usnyVLevI3YcU5LRGmNrah+cvSbtrJmzSyOVOdOXC9uLla+SR9DhxVrWI0472mZfXPUV2Ro8ujlknDHkzvJJZOJKTilvFU/Dr4G9g7vpx6tNHnxOeHCsWSEZcLxfDGkpP/AI0+Fu33W+8D8454RUpRd7Npu1zTpuq5WmQeg9DvS7PoskVGTljtXFt1u966crOXkcauWN+7ZTJMP0Z2V2jDUYoZsUk4zSe3TvT8T5+9JrbUuyJ2vWTgkpLlykbuLnnFkifZMlOqunWTPpYncbefrRlDCkVEWzKBECLG1A2Od7izo9SHn+hKE9HJbmUZIYThmFMsbXNGXU1zWYQaKxQbMoAiAo0cnNGHFa8+zZhxzkvFYdHHGlR8Pa02mbT7vpaxqNQkRQUMKTEoCD4367e1W5QwqkoW758TdWvBpx+57H06nmXPnn2fJJb8z1nM39jdq5tNP2mnzSxTreUeq7napkHrX62O0njeKeWMri4W8cVLf+ptc38gPDPI3JuTtttty3bb3e/f4gEpAfT/AFPekzx5vdskrWRqMVeyaW1fT7nl8/BuOuHRht7Ptco2jxtOpq7PyXBXzW30Po+Dk68Mb9nDmrqzVZ1tZpgDMkQaKAAIEBIrEmhsmFc8KZnF9NdqRLLm0fcbK5Gm+FgyYqZui23NaulTRkwSxx3XmeJ9ayTGOtPmXp/Tabta3w6B809ggGVCCnZNoVlgfnb1ma1ZM9XcnOU5OlST+GMYyTadLnXXnufQcKuqOPLPd4x14+Ff5O1qSw+fL5IgrfOyhNlE3LYxGvszUvFlx5U+Fxkt13dfszDJXqrNWVZ1O36p7N1Sy4seRf1wjL6rc+XvXVph3RO2zQy+KS8n9T1vpd+1q/8A1o5EeJbLPWcx2QOygLtCKAgVgTKhNFCbAQSYZtRp0zbW+mi+OJcyeOnR0RO3Faup0eCPxL5nzn1u38lY/wBPX+m1/C0/7ajxHpGggsoQUEgRyuk67mZR5H5m9NU3q8vOlKSXw8LStuq6btn0vHjWOHBee7z8oG+GCzGnVcl1fTvV/YxkS1MVUa7na8W2nz8vwIlZZjJEk9xIvww2bfRrzIP0b6tMrl2dgt8k0vJN0j5vlxrLZ3Y/1er0rrJ5x/DOn6XP8kx8w18iPxbme45ARQmA7GwFQDYQ2JWVDKISKIgASYZtZhvc3Y7ezmy092PEt/keD9a/y1/p3fT/ANJ/tceM7ysbUIoABEAWB8E9Yuha1U20k33Wk9trvrufScSd44cOT9njdTHamn4fz6nRDWzqPX+fzmBfrKpVXjSpLu8yVWWNoyRNYyC6MfhfjVeVuySP0d6vMPDoMO36k5b+L/aj5zlTvLLvx/rD0uD9afgzo+mx/Nv/AEwz/q3cR70uM7MQkwHYApAAABKzJBYEWyoVgKyAluZRLG0bcvM1jbb5UeR9VjqyU/p1cCk6tWPlgya+b5bHBGOsPXjDX3RjrZ9WvoWcdJWcNV2PtHvX0MJwx7S12wfEteLURlyZptS0NNqTXytMGBMqvmXrM7MuanFc0299rezdd+yPb+n5N00480d3zHW6Z93h8j0oaWR46+Q0KJ4trAjDFz2Au9k3TZiOl2RoPa5cUUr3V9+72MLzqsyyiNv0d2XpvZYseP8A6xivmlv9z5q9uq0y74jUNenXxt9y/J6H0yv52s05/EQ18R7Tl0fEQOyAsAsGhZDQsKdmTE7ARUIqABWNo4XbOW8ij0irfm/9fk8vnX3eI+HrcDH00m3ywWcEu8+IgLMgJ0Zb7alJiJbtHrLfDLn0Zz5Meu8OfJj13huNLQ4fpVoPa4rreP1o7eHl6b6+WrLTcPlva3ZlNqutnvVtuHHLz2bQPmjNFPuz6rkQQnpQNGDs5yrbYg+jer30dUZPJOPwqmv7lTX7nm8/PqOmPLow033fSbPFdS3SR2cu/wDB7v0/F04+qfdy5rbnTQeg0pIgAAgCAAVgTMmIoIDKEIoCBEHm+1k45ZN/1U0/CkqPI5lZjJt7XDtE4oiPZj9sv4jl06g8oB7YoTygCyl12lJ8O5jyWk/A45cU+RN2qJE6lNPEekfZTi73ad7/AD/J7nE5NbRqXFkxzDy+fSX0Z37hpYsmi8Chx7PV8vsQek9H/R15JJtUlzOPk8quONR5bceObPoejwRxxUIqkjwr3m89UuyI1GoXc9l1GOk5LRWPctOo26EI0ku4+ppTorFY9nBM7naRUNABNAsKAEQFEE0bGvYJoFFAUJgIxGXXaOOWNS59H3M05cUZI1LbhzWx23Dymv008LqS8muTPKyU6LdMvZxZa5K7hkeYw02QPaFNpwdk7Jt0tHpHzlsab39oar5Ph0XM0aaSUhoKSUue68SxMxO4SY25Ot7BhNPhfC2/4tvE7MfMtWe/dpthiWTH6MR24mnXhz3539TbPPn2hjGBt0nYOGG9W/Hl9zRk5mS3uzrhrDqYoqKpKkjltM27y2xGvCxSMTTbosL/AFP5fue19O401/kt7+HLnyb/ABhqSPVcySQDREFDSo0TQRFNEUyATNjUdgFjQLAjZFBJEbIjN2jHG4pZJRi3y4nz/wBeJo5HE9au47TDo483id1jcPP5tFjvlXins/I8S03raaz5h6cZJ0WPR40Yze3uTeWiCiuSRhMzLCZmUnlIaReUGh7QJpJTAlxhUuImkCkNB8RNDdotHxfE+X5/0ejw+H6n538f9ubNm12h1OE93w49k4gDQAERYVFiWRGErEGiIdAR4jPTULIGiwpgRZioEoEm+QiB5rDpXqcmTj3+F1v+l3UarnVcjotboiNPSyZPSpWKo6jE4KOnbt3+pLf42qVeG7+ZrnFjvPqTWNwyx33E5FWTs3Jitt3G6T3vd7WqOfPgryOjcd48ssfIrknUQoUMu0oxlKLfNfsTLxcM0tWK60ynLjienfc8mRr7+ZyYPp+Poics95bNRrcjHqrSfea//wAy3qTXf4x7pFdp4s1tru5mjl8P0NWidxJNdL1I4mKyLIJWE0kmB09BoL+KfLou/wD0ejxOH1avfw5M2fXarrntOMmAmUJgRYEJMLCFkU0Yyzg4siCwINmxpJMgnFhUmQRZA0jFUcLu/MzjwjNj7P4MrnFupc43tfXYytbcabLZZtWIn2Z+2Oz5TlHJD9UWufUVtqNNmPN01ms+JX9q6WWTFw/1KpebXT7kpPTLHBkjHfcjsdNYopqq23Fu87TLaJvMw5nZmLhzzjNW6dX3Xd/c2XncQ6M+SLY66LtqCWaFx2lw3XhJ/uhX9Zhngt/Dbv3dT/8AKw81Gm+qOa+Ot69Fo7Q5YzXj3c3W6Lgez2ff0PH5nGjFqa+JdeDNN9xKqOM4W/ayOIm023dm6ZOVvp+eh3cHD136p8Q589+mNR7uzZ7kOIyoCiLKItgQYIQYUmRSsksoMxUBEDY0FZFSRRNMxWJSijFVkEBTi6/3MzhilKQU4yJoOyaQmyhcCu63KqvNgjKuJcna8ybWLTCVUYjna/8Az+55/wBS/wAcf26ON+0qIRPF27l0YEYt2iVJ+Z7f0+IjFv5cWefyakzviWhYmZxIVmQi2CUWwiDKqLAi2YsismliSsxZJcRdK5K1bPO+5s8/rkPVyH3Nzrke9yJ9zc65P32Ynk3X1JSXaE/An3Nz1JSjr8jJbmTWO8tmOMmSfxh0NPK4pvruz08duqkT8tmpjtKvU6hR5/JGOTJFI3LGbRExHuzPtDuSOP723tSWUxH/ALwtx69dV9DKvNrvVomFik63ExLVGdq1udsW34Y7SUjJTTJKK8mVLxOTNyseKdTPdtpitZh1GJy8DyuZyozTEV8Q68OPo3v3VYo9Dhb14RXHM1aXez1eLea44h5fJt/JKXvMu86PVs0dUhamXeSMtvlOqQ9XPvL69/leuS97n/2Hr3+U6pJ6yfePuL/J1SXvku8fc3+V65Hvci/c2OuR72x9zY6yeqY+5sepIWrY+4svqyPemPuJPVlko49tOjobNCimjoGhQFsJqMX3nDk73ezxqxGONOjpZfCj6anaka+HHbzLh9sdt6fBWXVT4ISyRww2b+OSbt1yVJuxrbhpX1rWtPt2T1MeCTit+t+Bz5sVZ7zM/wDxo9S+K/pxET/YTfcvkcE2xx4vaHfWMvvSs/1LTpMzTro+nidXHy77dcSwtFq+KTX/AKdOL2PRjw3R4TTE+Fc55qtPnbs+VyRaLzE+dvUrqYjQWY1zDLSMWm22QW8RUZpc35s78E/hDyuT/kk7NrnKxtEWybAyIQCAGERYATYQ2AbRZRGzR0U0KBoiABpDLFtbGq2PdomHbxuRFI6bOti2ij6GI1WGue7zfaGHBmcY58cMqWX2mNS6ZIJ7peCu0zCLQ8uuXJhtaNbhdnyOUnJ83+BLjyWm9ptPlWiTESxibR4lKEna5mEYqRO9d2yM2Wfx3Mt6yyr+tV9WbG7qyR53C3Hraq3a5eJdt+PkzExvw059Kp+D7zm5HFpl7+JetjzTT+nNyJxdP6njZ8E4rdMu7HeLxuDjBt8zRDOWuESTLFRkW7OzBP4PK5cfyEbtucMbESbTRpDZoNDZoUDQaLs0JBESIVEBQEwzOy7CsKVkQwpxW5nSN2gh0lyR7cOiHK1PZi43kjFcT5vqaprqduDPgvadwr90n3Gqc1YaI4mWfY/c5k9eq/Z5Fuh0jUrfJfk2456+8MuPxrVvu3s6puelrZOK7l9DGYTor8JJkZOVq/1fI8b6j/kj+nbxf0TxHnS6JXxMUUZVudWCfxebzI/OJVs3bcRWXamhsSoinQDooRRFogiwkwTGwWEIxUWAWTaBDZsIbVbj5mzD+9WUeXSXI9xvKxKgk46z5g2fCjCcGP4Nm0bK1ivaEIyUWYyDoQczVP4/keL9Rn+XX+ndxv0TgedLoXJmLFVn5/I34Z7zDi5te0S4mp1svacKdJHS7eNxcfpxMxuZb9Jl4o2+d0R5XLxRjyTWPDQkVzwki7EgFZQrG1RZNgJtDovYFDalRghKIA4k0DhLoHCQSRlWdTsaVnPYpyaWjy3RaB7c3RaJ8MtpRzGSrYZEVFhAgE0SVRlyfkSCXM1LuT+R4PPneaXfx41jhPEcLevCKs76mzF+zm5UdVNf7h5qHxTlLxOzT1ccdNYj4dnRRqC8d/uYvneZbqzWlpTDnNMBhQBEIApoAKHRERsgLAdgAUBAwFYCsRaY8SBSZsrnyV8SvVKxTOivNvHll1ysjlN1edHvCxcPVVzL9/i3qezopiteNwa1i7zbXl4beLLOG8eyGTVLoWeRir5tCenefZmlK234ngZsnXe1noUr01iF0TVMMlhirN2jk4ccpdy/Oxni/aE6OqYiXA0kXS73t9TttLqyWilZtPs70VSS7jW+YtM2nfyo98jdb+L6GWnZH0/LNOppTI4taSTKGgHQUUUPhC6NIBUU0qNbE4lDQAAAAECBEEiiSLCpdSKp1PQ0Zf2enw/0ZzGHYlDmYx5JWx5FYr4mUoshyNauf23/AMMv/X/6RsxftDPH+zm6LnDzOuycz/Bd1cv6X5P8Gt4OL96/25ml/wAGUPqLOrg/THyX4MXy+T97f2tRkwNAg0ZKkuYVIoAJFH//2Q=="
        alt="프로필"
      />
      <ProfileHeader>
        <BackIcon />
        <HeaderText>
          <Name>따개비루</Name>
          <NumOfPost>0 posts</NumOfPost>
        </HeaderText>
      </ProfileHeader>
      <BgImage />
      <UserInfo>
        <RightSection>
          <EditButton>Edit profile</EditButton>
        </RightSection>
        <LeftSection>
          <Name>따개비루</Name>
          <GrayText>@iamroo</GrayText>
          <GrayText>Joind January 2024</GrayText>
          <GrayText>0 Following 0 Followers</GrayText>
        </LeftSection>
        <TabBar>
          <WhiteText>Posts</WhiteText>
          <GrayText>Replies</GrayText>
          <GrayText>Highlights</GrayText>
          <GrayText>Articles</GrayText>
          <GrayText>Media</GrayText>
          <GrayText>Likes</GrayText>
        </TabBar>
      </UserInfo>
    </ProfileContainer>
  );
};

export default ProfileSection;
