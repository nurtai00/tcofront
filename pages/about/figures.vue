<script>
export default {
  data() {
    return {
      tags: [
        {
          id: 1,
          text: 2011,
          selected: true,
        },
        {
          id: 2,
          text: 2012,
        },
        {
          id: 3,
          text: 2013,
        },
        {
          id: 4,
          text: 2014,
        },
        {
          id: 5,
          text: 2015,
        },
        {
          id: 6,
          text: 2016,
        },
        {
          id: 7,
          text: 2017,
        },
        {
          id: 8,
          text: 2018,
        },
        {
          id: 9,
          text: 2019,
        },
        {
          id: 10,
          text: 2020,
        },
        {
          id: 11,
          text: 2021,
        },
        {
          id: 12,
          text: 2022,
        },
      ],
      selected_tag: 1,
      files: {
        en: {
          2011: [
            {
              name: '1h2011.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2011%2F1h2011%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2011',
            },
            {
              name: '2h2011.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2011%2F1q2011%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2011',
            },
            {
              name: '3h2011.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2011%2F3q2011%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2011',
            },
            {
              name: '4h2011.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2011%2F4q2011%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2011',
            },
          ],
          2012: [
            {
              name: '1h2012.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2012%2F1q2012%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2012',
            },
            {
              name: '2h2012.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2012%2F2q2012%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2012',
            },
            {
              name: '3h2012.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2012%2F3q2012%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2012',
            },
            {
              name: '4h2012.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2012%2F4q2012%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2012',
            },
          ],
          2013: [
            {
              name: '1h2013.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2013%2F1h2013%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2013',
            },
            {
              name: '2h2013.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2013%2F1q2013%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2013',
            },
            {
              name: '3h2013.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2013%2F3q2013%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2013',
            },
            {
              name: '4h2013.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2013%2F4q2013%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2013',
            },
          ],
          2014: [
            {
              name: '1h2014.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2014%2F1h2014%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2014',
            },
            {
              name: '2h2014.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2014%2F1q2014%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2014',
            },
            {
              name: '3h2014.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2014%2F3q%2D2014%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2014',
            },
            {
              name: '4h2014.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2014%2F4q%2D2014%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2014',
            },
          ],
          2015: [
            {
              name: '1h2015.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2015%2F1h%2D2015%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2015',
            },
            {
              name: '2h2015.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2015%2F1q%2D2015%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2015',
            },
            {
              name: '3h2015.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2015%2F3q%2D2015%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2015',
            },
            {
              name: '4h2015.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2015%2F4q%2D2015%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2015',
            },
          ],
          2016: [
            {
              name: '1h2016.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2016',
            },
            {
              name: '2h2016.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2016%2F1q%2D2016%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2016',
            },
            {
              name: '3h2016.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2016%2F3q%2D2016%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2016',
            },
            {
              name: '4h2016.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2016%2F4q2016%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2016',
            },
          ],
          2017: [
            {
              name: '1h2017.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2017%2F1h%2D2017%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2017',
            },
            {
              name: '2h2017.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2017%2F1q2017%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2017',
            },
            {
              name: '3h2017.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2017%2F3q%2D2017%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2017',
            },
            {
              name: '4h2017.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2017%2F4q%2D2017%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2017',
            },
          ],
          2018: [
            {
              name: '1h2018.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2018%2Ftco%2Dfact%2Dsheet%2D1q%2D2018%5Fe%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2018',
            },
            {
              name: '2h2018.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2018%2F2nd%2Dquarter%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2018',
            },
            {
              name: '3h2018.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2018%2F3rd%2Dquarter%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2018',
            },
            {
              name: '4h2018.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2018%2F4th%2Dquarter%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2018',
            },
          ],
          2019: [
            {
              name: '1h2019.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2019%2F1%2Dquarter%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2019',
            },
            {
              name: '2h2019.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2019%2F2%2Dquarter%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2019',
            },
            {
              name: '3h2019.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2019%2F3%2Dquarter%20%281%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2019',
            },
            {
              name: '4h2019.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2019%2F4%2Dquarter%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2019',
            },
          ],
          2020: [
            {
              name: '1h2020.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2020%2Ftco%2Dfact%2Dsheet%2D1q%2D2020%5Fe%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2020',
            },
            {
              name: '2h2020.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2020%2F2%2Dquarter%20%281%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2020',
            },
            {
              name: '3h2020.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2020%2F3%2Dquarter%20%282%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2020',
            },
            {
              name: '4h2020.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2020%2F4%2Dquarter%20%281%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2020',
            },
          ],
          2021: [
            {
              name: '1h2021.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2021%2F1%2Dquarter%20%281%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2021',
            },
            {
              name: '2h2021.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2021%2F2%2Dquarter%20%282%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2021',
            },
            {
              name: '3h2021.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2021%2F3%2Dquarter%20%283%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2021',
            },
            {
              name: '4h2021.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2021%2F4%2Dquarter%20%282%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2021',
            },
          ],
          2022: [
            {
              name: '1h2022.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2022%2F1%2Dquarter%20%282%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2022',
            },
            {
              name: '2h2022.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2022%2F2%2Dquarter%20%283%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2022',
            },
            {
              name: '3h2022.pdf',
              link: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2022%2F3%2Dquarter%20%284%29%2Epdf&parent=%2Fpersonal%2Fn%5Fnudiyev%5Fnorsec%5Fkz%2FDocuments%2F%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%2FTCOntent%2FFacts%20and%20Figures%2FEN%2F2022',
            },
            // {
            //   name: '4h2022.pdf',
            //   link: '',
            // },
          ],
        },
      },
    }
  },
  methods: {
    onTag(item) {
      console.log(item)
      this.tags.forEach((tag) => {
        if (tag.id === item.id) {
          tag.selected = true
        } else {
          tag.selected = false
        }
      })
      this.$forceUpdate()
    },
  },
}
</script>

<template>
  <div>
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption :to="localePath('/')">{{
          $t('company.breadcrumbs[0]')
        }}</AtomsBreadOption>
        <AtomsBreadOption :to="localePath('/about')">{{
          $t('company.breadcrumbs[1]')
        }}</AtomsBreadOption>
        <AtomsBreadOption :to="localePath('/about/figures')">{{
          $t('company.figures_title')
        }}</AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <div class="kazakhstani__tags">
        <AtomsTag
          v-for="tag of tags"
          :key="tag.id + 'asd' + tag.selected"
          :tag="tag"
          @click="onTag"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.kazakhstani {
  &__breadcrumbs {
    margin: 42px 0 22px;
  }

  &__title {
    margin-bottom: 20px;
  }

  &__tags {
    margin-bottom: 40px;
  }

  .gray {
    background-color: $c-tco33;
  }

  &__chart {
    padding: 80px 0;

    p {
      font-size: 20px;
      color: $c-tco1;
    }

    @media screen and (max-width: 572px) {
      padding: 40px 0;

      p {
        font-size: 14px;
      }
    }
  }

  .strategy {
    display: flex;
    padding: 80px 0;

    & > div {
      width: 50%;
    }

    &__content {
      padding-right: 72px;
    }

    &__title {
      font-size: 38px;
      line-height: 46px;
      margin-bottom: 40px;
      color: $c-tco1;
      font-weight: 700;
    }

    p {
      margin-bottom: 40px;
    }

    &__cards {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      & > div {
        width: calc(50% - 24px);
        margin-bottom: 24px;
        box-shadow: 0 10px 30px 0 #8a959e1a;
      }
    }

    @media screen and (max-width: 1025px) {
      flex-direction: column;

      & > div {
        width: 100%;
      }

      &__content {
        padding-right: 0;
      }
    }

    @include phone {
      padding: 40px 0;

      &__title {
        font-size: 20px;
        line-height: 26px;
      }

      p {
        font-size: 16px;
        line-height: 20px;
      }

      &__cards {
        & > div {
          width: 100%;

          &:nth-child(3) {
            order: 4;
          }
        }
      }
    }
  }

  &__titlee {
    margin-bottom: 20px;
    font-size: 38px;
    line-height: 46px;
    color: $c-tco3;
    font-weight: 700;

    @media screen and (max-width: 572px) {
      font-size: 20px;
      line-height: 26px;
    }
  }

  &__working {
    padding: 80px 0;

    & > div {
      display: flex;
      margin-bottom: 54px;

      &:first-child {
        .kazakhstani__working_cards {
          width: 50%;

          & > div {
            width: calc(50% - 12px);
          }

          @media screen and (max-width: 1025px) {
            width: 100%;
          }
        }
      }

      @media screen and (max-width: 1025px) {
        flex-wrap: wrap;
        margin-bottom: 0;
      }
    }

    &_cards {
      display: flex;
      justify-content: space-between;

      & > div {
        width: calc(100% / 4 - 24px);

        @media screen and (max-width: 1025px) {
          width: calc(100% / 2 - 12px);
          margin-bottom: 20px;
        }
      }
    }

    &_content {
      width: 50%;
      margin-right: 24px;
      padding-right: 50px;

      .title {
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;
        margin-bottom: 16px;
        color: #000;

        &:first-child {
          margin-bottom: 50px;
        }
      }

      p {
        a {
          color: $c-tco5;
        }
      }

      @media screen and (max-width: 1025px) {
        width: 100%;
        margin-right: 0;
        padding-right: 0;
        margin-bottom: 20px;
      }
    }

    @media screen and (max-width: 572px) {
      padding: 40px 0;

      &_content {
        .title {
          font-size: 20px;
          line-height: 26px;

          &:first-child {
            margin-bottom: 40px;
          }
        }

        p {
          font-size: 16px;
          line-height: 20px;
        }
      }

      &_cards {
        flex-wrap: wrap;

        .card {
          width: 100% !important;
        }
      }
    }
  }
}
</style>
