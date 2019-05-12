import React from 'react';
import { SectionHeader } from '../styled/Base';
import { Container } from '../styled/Layout';
import defaultTheme from '../styled/Theme';
import { flexCenter } from '../styled/Mixins';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

const DownloadList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #333333;
`;

const DownloadItem = styled.li`
  ${flexCenter()}
  justify-content: flex-start;
  padding: 16px;
  background: ${() => defaultTheme.colors.gray};
  cursor: pointer;
  transition: background 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

  & + & {
    margin-top: 10px;
  }

  &:hover {
    background: #e4e3df;
  }
`;

const FileTypeIcon = styled.img`
  width: 30px;
  margin-right: 18px;
`;

const DownloadIcon = styled.img`
  width: 30px;
  margin: 0 5px 0 auto;
`;

const DownloadLink = styled.a`
  color: #333333;
  text-decoration: none;

  &:hover {
    color: currentColor;
    text-decoration: none;
  }
`;

export default () => (
  <StaticQuery
    query={graphql`
      query Downloads {
        allContentfulDownload {
          nodes {
            name
            file {
              title
              file {
                url
              }
            }
          }
        }
      }
    `}
    render={({ allContentfulDownload }) => {
      const downloads = allContentfulDownload.nodes.map(node => {
        return {
          url: node.file.file.url,
          name: node.name
        };
      });

      return (
        <Container id="downloads" className="container-fluid">
          <SectionHeader>DOWNLOADS</SectionHeader>
          <DownloadList>
            {downloads.map((downloadItem, index) => (
              <DownloadLink href={downloadItem.url} key={index} target="_blank">
                <DownloadItem>
                  <FileTypeIcon src="images/pdf_icon.svg" />
                  <span>{downloadItem.name}</span>
                  <DownloadIcon src="images/download_icon.svg" />
                </DownloadItem>
              </DownloadLink>
            ))}
          </DownloadList>
        </Container>
      );
    }}
  />
);
