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
      selected_tag: 2011,
      files: {
        en: {
          2011: [
            {
              name: '1 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2011/1q2011.pdf?sfvrsn=3908c55c_2',
            },
            {
              name: '2 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2011/3q2011.pdf?sfvrsn=2708c55c_2',
            },
            {
              name: '3 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2011/3q2011.pdf?sfvrsn=2708c55c_2',
            },
            {
              name: '4 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2011/4q2011.pdf?sfvrsn=3a08c55c_2',
            },
          ],
          2012: [
            {
              name: '1 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2012/1q2012.pdf?sfvrsn=5308c55c_2',
            },
            {
              name: '2 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2012/2q2012.pdf?sfvrsn=5608c55c_2',
            },
            {
              name: '3 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2012/3q2012.pdf?sfvrsn=5508c55c_2',
            },
            {
              name: '4 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2012/4q2012.pdf?sfvrsn=5408c55c_2',
            },
          ],
          2013: [
            {
              name: '1 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2013/1q2013.pdf?sfvrsn=cf09c55c_2',
            },
            {
              name: '2 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2013/1h2013.pdf?sfvrsn=c209c55c_2',
            },
            {
              name: '3 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2013/3q2013.pdf?sfvrsn=c109c55c_2',
            },
            {
              name: '4 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2013/4q2013.pdf?sfvrsn=c009c55c_2',
            },
          ],
          2014: [
            {
              name: '1 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2014/1q2014.pdf?sfvrsn=7e09c55c_2',
            },
            {
              name: '2 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2014/1h2014.pdf?sfvrsn=7c09c55c_2',
            },
            {
              name: '3 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2014/3q-2014.pdf?sfvrsn=7b09c55c_2',
            },
            {
              name: '4 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2014/4q-2014.pdf?sfvrsn=7d09c55c_2',
            },
          ],
          2015: [
            {
              name: '1 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2015/1q-2015.pdf?sfvrsn=ea0ec55c_2',
            },
            {
              name: '2 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2015/1h-2015.pdf?sfvrsn=970ec55c_2',
            },
            {
              name: '3 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2015/3q-2015.pdf?sfvrsn=e80ec55c_2',
            },
            {
              name: '4 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2015/4q-2015.pdf?sfvrsn=e90ec55c_2',
            },
          ],
          2016: [
            {
              name: '1 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2016/1q-2016.pdf?sfvrsn=30ec55c_2',
            },
            {
              name: '2 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2016/1h2016.pdf?sfvrsn=50ec55c_2',
            },
            {
              name: '3 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2016/3q-2016.pdf?sfvrsn=40ec55c_2',
            },
            {
              name: '4 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2016/4q2016.pdf?sfvrsn=60ec55c_2',
            },
          ],
          2017: [
            {
              name: '1 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2017/1q2017.pdf?sfvrsn=b10fc55c_2',
            },
            {
              name: '2 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2017/1h-2017.pdf?sfvrsn=b20fc55c_2',
            },
            {
              name: '3 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2017/3q-2017.pdf?sfvrsn=bf0fc55c_2',
            },
            {
              name: '4 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2017/4q-2017.pdf?sfvrsn=b00fc55c_2',
            },
          ],
          2018: [
            {
              name: '1 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2018/tco-fact-sheet-1q-2018_e.pdf?sfvrsn=2d0fc55c_2',
            },
            {
              name: '2 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2018/2nd-quarter.pdf?sfvrsn=2e0fc55c_2',
            },
            {
              name: '3 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2018/3rd-quarter.pdf?sfvrsn=2c0fc55c_2',
            },
            {
              name: '4 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2018/4th-quarter.pdf?sfvrsn=2b0fc55c_2',
            },
          ],
          2019: [
            {
              name: '1 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2019/1-quarter.pdf?sfvrsn=470fc55c_2',
            },
            {
              name: '2 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2019/2-quarter.pdf?sfvrsn=580fc55c_2',
            },
            {
              name: '3 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2019/3-quarter-(1).pdf?sfvrsn=5a0fc55c_2',
            },
            {
              name: '4 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2019/4-quarter.pdf?sfvrsn=590fc55c_2',
            },
          ],
          2020: [
            {
              name: '1 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2020/tco-fact-sheet-1q-2020_e.pdf?sfvrsn=f30cc55c_2',
            },
            {
              name: '2 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2020/2-quarter-(1).pdf?sfvrsn=f50cc55c_2',
            },
            {
              name: '3 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2020/3-quarter-(2).pdf?sfvrsn=f60cc55c_2',
            },
            {
              name: '4 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2020/4-quarter-(1).pdf?sfvrsn=f40cc55c_2',
            },
          ],
          2021: [
            {
              name: '1 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2021/1-quarter-(1).pdf?sfvrsn=610cc55c_2',
            },
            {
              name: '2 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2021/2-quarter-(2).pdf?sfvrsn=6f0cc55c_2',
            },
            {
              name: '3 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2021/3-quarter-(3).pdf?sfvrsn=620cc55c_2',
            },
            {
              name: '4 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2021/4-quarter-(2).pdf?sfvrsn=600cc55c_2',
            },
          ],
          2022: [
            {
              name: '1 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2022/1-quarter-(2).pdf?sfvrsn=9b0dc55c_2',
            },
            {
              name: '2 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2022/2-quarter-(3).pdf?sfvrsn=9d0dc55c_2',
            },
            {
              name: '3 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2022/3-quarter-(4).pdf?sfvrsn=9c0dc55c_2',
            },
            {
              name: '4 quarter (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/en/2022/tco-fact-sheet-4q-2022_final_e.pdf?sfvrsn=2ee1c55c_2',
            },
          ],
        },
        kk: {
          2011: [
            {
              name: '1-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2011/қантар---наурыз-2011.pdf?sfvrsn=3807c55c_2',
            },
            {
              name: '2-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2011/қантар---маусым-2011.pdf?sfvrsn=2507c55c_2',
            },
            {
              name: '3-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2011/қантар---қыркүйек-2011.pdf?sfvrsn=2607c55c_2',
            },
            {
              name: '4-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2011/қантар---желтоқсан-2011.pdf?sfvrsn=2707c55c_2',
            },
          ],
          2012: [
            {
              name: '1-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2012/қантар---наурыз-2012.pdf?sfvrsn=5407c55c_2',
            },
            {
              name: '2-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2012/қантар---маусым-2012.pdf?sfvrsn=5307c55c_2',
            },
            {
              name: '3-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2012/қантар---қыркүйек-2012.pdf?sfvrsn=5107c55c_2',
            },
            {
              name: '4-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2012/қантар---желтоқсан-2012.pdf?sfvrsn=5207c55c_2',
            },
          ],
          2013: [
            {
              name: '1-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2013/қантар---наурыз-2013.pdf?sfvrsn=cd04c55c_2',
            },
            {
              name: '2-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2013/қантар---маусым-2013.pdf?sfvrsn=cf04c55c_2',
            },
            {
              name: '3-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2013/қантар---қыркүйек-2013.pdf?sfvrsn=c004c55c_2',
            },
            {
              name: '4-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2013/қантар---желтоқсан-2013.pdf?sfvrsn=ce04c55c_2',
            },
          ],
          2014: [
            {
              name: '1-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2014/қантар---наурыз-2014.pdf?sfvrsn=7c04c55c_2',
            },
            {
              name: '2-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2014/қантар---маусым-2014.pdf?sfvrsn=7b04c55c_2',
            },
            {
              name: '3-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2014/қантар---қыркүйек-2014.pdf?sfvrsn=7904c55c_2',
            },
            {
              name: '4-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2014/қантар---желтоқсан-2014.pdf?sfvrsn=7a04c55c_2',
            },
          ],
          2015: [
            {
              name: '1-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2015/қантар---наурыз-2015.pdf?sfvrsn=9705c55c_2',
            },
            {
              name: '2-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2015/қантар---маусым-2015.pdf?sfvrsn=e805c55c_2',
            },
            {
              name: '3-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2015/қантар---қыркүйек-2015.pdf?sfvrsn=9605c55c_2',
            },
            {
              name: '4-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2015/қантар---желтоқсан-2015.pdf?sfvrsn=9505c55c_2',
            },
          ],
          2016: [
            {
              name: '1-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2016/қантар---наурыз-2016.pdf?sfvrsn=405c55c_2',
            },
            {
              name: '2-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2016/қантар---маусым-2016.pdf?sfvrsn=205c55c_2',
            },
            {
              name: '3-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2016/қантар---қыркүйек-2016.pdf?sfvrsn=305c55c_2',
            },
            {
              name: '4-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2016/қантар---желтоқсан-2016.pdf?sfvrsn=105c55c_2',
            },
          ],
          2017: [
            {
              name: '1-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2017/қантар---наурыз-2017.pdf?sfvrsn=bd0ac55c_2',
            },
            {
              name: '2-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2017/қантар---маусым-2017.pdf?sfvrsn=be0ac55c_2',
            },
            {
              name: '3-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2017/қантар---қыркүйек-2017.pdf?sfvrsn=b00ac55c_2',
            },
            {
              name: '4-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2017/қантар---желтоқсан-2017.pdf?sfvrsn=bf0ac55c_2',
            },
          ],
          2018: [
            {
              name: '1-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2018/tco-fact-sheet-1q-2018_k.pdf?sfvrsn=2a0ac55c_2',
            },
            {
              name: '2-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2018/2-ші-тоқсан.pdf?sfvrsn=2b0ac55c_2',
            },
            {
              name: '3-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2018/3-ші-тоқсан-(1).pdf?sfvrsn=290ac55c_2',
            },
            {
              name: '4-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2018/4-ші-тоқсан.pdf?sfvrsn=2c0ac55c_2',
            },
          ],
          2019: [
            {
              name: '1-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2019/1-ші-тоқсан.pdf?sfvrsn=450ac55c_2',
            },
            {
              name: '2-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2019/tco-fact-sheet-1h-2019_k.pdf?sfvrsn=460ac55c_2',
            },
            {
              name: '3-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2019/3-ші-тоқсан-(2).pdf?sfvrsn=470ac55c_2',
            },
            {
              name: '4-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2019/4-ші-тоқсан-(1).pdf?sfvrsn=580ac55c_2',
            },
          ],
          2020: [
            {
              name: '1-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2020/1-ші-тоқсан-(1).pdf?sfvrsn=f30bc55c_2',
            },
            {
              name: '2-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2020/2-ші-тоқсан-(1).pdf?sfvrsn=f20bc55c_2',
            },
            {
              name: '3-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2020/3-ші-тоқсан-(3).pdf?sfvrsn=f40bc55c_2',
            },
            {
              name: '4-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2020/4-ші-тоқсан-(2).pdf?sfvrsn=f10bc55c_2',
            },
          ],
          2021: [
            {
              name: '1-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2021/1-ші-тоқсан-(2).pdf?sfvrsn=6d0bc55c_2',
            },
            {
              name: '2-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2021/2-ші-тоқсан-(2).pdf?sfvrsn=6e0bc55c_2',
            },
            {
              name: '3-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2021/3-ші-тоқсан-(4).pdf?sfvrsn=6f0bc55c_2',
            },
            {
              name: '4-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2021/4-ші-тоқсан-(3).pdf?sfvrsn=600bc55c_2',
            },
          ],
          2022: [
            {
              name: '1-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2022/1-шi-тоқсан.pdf?sfvrsn=9908c55c_2',
            },
            {
              name: '2-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2022/2-шi-тоқсан.pdf?sfvrsn=9b08c55c_2',
            },
            {
              name: '3-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2022/3-ші-тоқсан-(5).pdf?sfvrsn=9a08c55c_2',
            },
            {
              name: '4-шi тоқсан (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/kk/2022/tco-fact-sheet-4q-2022_final_k.pdf?sfvrsn=c3e1c55c_2',
            },
          ],
        },
        ru: {
          2011: [
            {
              name: '1 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2011/январь---март-2011.pdf?sfvrsn=2402c55c_2',
            },
            {
              name: '2 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2011/январь---июнь-2011.pdf?sfvrsn=2602c55c_2',
            },
            {
              name: '3 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2011/январь---сентябрь-2011.pdf?sfvrsn=2502c55c_2',
            },
            {
              name: '4 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2011/январь---декабрь-2011.pdf?sfvrsn=2302c55c_2',
            },
          ],
          2012: [
            {
              name: '1 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2012/январь---март-2012.pdf?sfvrsn=5202c55c_2',
            },
            {
              name: '2 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2012/январь---июнь-2012.pdf?sfvrsn=5102c55c_2',
            },
            {
              name: '3 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2012/январь---сентябрь-2012.pdf?sfvrsn=5f02c55c_2',
            },
            {
              name: '4 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2012/январь---декабрь-2012.pdf?sfvrsn=5002c55c_2',
            },
          ],
          2013: [
            {
              name: '1 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2013/январь---март-2013.pdf?sfvrsn=cd03c55c_2',
            },
            {
              name: '2 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2013/январь---июнь-2013.pdf?sfvrsn=ce03c55c_2',
            },
            {
              name: '3 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2013/январь---сентябрь-2013.pdf?sfvrsn=cc03c55c_2',
            },
            {
              name: '4 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2013/январь---декабрь-2013.pdf?sfvrsn=cb03c55c_2',
            },
          ],
          2014: [
            {
              name: '1 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2014/январь---март-2014.pdf?sfvrsn=7a03c55c_2',
            },
            {
              name: '2 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2014/январь---июнь-2014.pdf?sfvrsn=7803c55c_2',
            },
            {
              name: '3 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2014/январь---сентябрь-2014.pdf?sfvrsn=7903c55c_2',
            },
            {
              name: '4 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2014/январь---декабрь-2014.pdf?sfvrsn=6703c55c_2',
            },
          ],
          2015: [
            {
              name: '1 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2015/январь---март-2015.pdf?sfvrsn=9600c55c_2',
            },
            {
              name: '2 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2015/январь---июнь-2015.pdf?sfvrsn=9300c55c_2',
            },
            {
              name: '3 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2015/январь---сентябрь-2015.pdf?sfvrsn=9500c55c_2',
            },
            {
              name: '4 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2015/январь---декабрь-2015.pdf?sfvrsn=9400c55c_2',
            },
          ],
          2016: [
            {
              name: '1 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2016/январь---март-2016.pdf?sfvrsn=100c55c_2',
            },
            {
              name: '2 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2016/январь---июнь-2016.pdf?sfvrsn=200c55c_2',
            },
            {
              name: '3 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2016/январь---сентябрь-2016.pdf?sfvrsn=f00c55c_2',
            },
            {
              name: '4 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2016/январь---декабрь-2016.pdf?sfvrsn=c55c_2',
            },
          ],
          2017: [
            {
              name: '1 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2017/январь---март-2017.pdf?sfvrsn=be01c55c_2',
            },
            {
              name: '2 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2017/январь---июнь-2017.pdf?sfvrsn=bd01c55c_2',
            },
            {
              name: '3 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2017/январь---сентябрь-2017.pdf?sfvrsn=bc01c55c_2',
            },
            {
              name: '4 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2017/январь---декабрь-2017.pdf?sfvrsn=bb01c55c_2',
            },
          ],
          2018: [
            {
              name: '1 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2018/tco-fact-sheet-1q-2018_r.pdf?sfvrsn=2901c55c_2',
            },
            {
              name: '2 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2018/2-квартал.pdf?sfvrsn=2a01c55c_2',
            },
            {
              name: '3 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2018/3-квартал-(1).pdf?sfvrsn=d701c55c_2',
            },
            {
              name: '4 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2018/4-квартал.pdf?sfvrsn=2801c55c_2',
            },
          ],
          2019: [
            {
              name: '1 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2019/1-квартал.pdf?sfvrsn=4601c55c_2',
            },
            {
              name: '2 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2019/1-полугодие.pdf?sfvrsn=4401c55c_2',
            },
            {
              name: '3 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2019/3-квартал-(2).pdf?sfvrsn=4501c55c_2',
            },
            {
              name: '4 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2019/4-квартал-(1).pdf?sfvrsn=4301c55c_2',
            },
          ],
          2020: [
            {
              name: '1 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2020/1-квартал-(1).pdf?sfvrsn=f006c55c_2',
            },
            {
              name: '2 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2020/2-квартал-(1).pdf?sfvrsn=f106c55c_2',
            },
            {
              name: '3 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2020/3-квартал-(3).pdf?sfvrsn=ff06c55c_2',
            },
            {
              name: '4 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2020/4-квартал-(2).pdf?sfvrsn=f206c55c_2',
            },
          ],
          2021: [
            {
              name: '1 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2021/1-квартал-(2).pdf?sfvrsn=6b06c55c_2',
            },
            {
              name: '2 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2021/2-квартал-(2).pdf?sfvrsn=6c06c55c_2',
            },
            {
              name: '3 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2021/3-квартал-(4).pdf?sfvrsn=6e06c55c_2',
            },
            {
              name: '4 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2021/4-квартал-(3).pdf?sfvrsn=6d06c55c_2',
            },
          ],
          2022: [
            {
              name: '1 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2022/1-квартал-(3).pdf?sfvrsn=9807c55c_2',
            },
            {
              name: '2 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2022/2-квартал-(3).pdf?sfvrsn=9907c55c_2',
            },
            {
              name: '3 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2022/3-квартал-(5).pdf?sfvrsn=8707c55c_2',
            },
            {
              name: '4 квартал (pdf)',
              link: 'https://tengizchevroil.com/docs/default-source/tcodocuments/facts-and-figures/ru/2022/tco-fact-sheet-4q-2022_final_r.pdf?sfvrsn=f8e1c55c_2',
            },
          ],
        },
      },
    }
  },
  methods: {
    onTag(item) {
      this.tags.forEach((tag) => {
        if (tag.id === item.id) {
          tag.selected = true
          this.selected_tag = tag.text
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
        <AtomsBreadOption :to="localePath('/')">
          {{
            $t('company.breadcrumbs[0]')
          }}
        </AtomsBreadOption>
        <AtomsBreadOption :to="localePath('/about')">
          {{
            $t('company.breadcrumbs[1]')
          }}
        </AtomsBreadOption>
        <AtomsBreadOption :to="localePath('/about/figures')">
          {{
            $t('company.figures_title')
          }}
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <div class="kazakhstani__tags">
        <AtomsTag
          v-for="tag of tags"
          :key="tag.id + 'asd' + tag.selected"
          :tag="tag"
          @click="onTag"
        />
      </div>
      <div class="figures_list">
        <div v-for="file in files[$i18n.locale][selected_tag]" :key="file.link">
          <img src="@/assets/img/pdf.png" alt="pdf" width="30" height="40" />
          <a :href="file.link" target="_blank" v-text="file.name"></a>
        </div>
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
.figures_list {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;
  @media (orientation: portrait) {
    grid-template-columns: repeat(2, 50%);
  }
  div {
    margin-bottom: 30px;
  }
  a {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    text-decoration-line: underline;
    color: #181716;
    display: block;
    @media (orientation: portrait) {
      font-size: 14px;
      line-height: 18px;
    }
  }
}
</style>
