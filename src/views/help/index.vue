<template>
  <div class="wrap">
    <div class="title">
      <ul>
        <li><a id="TData Viewer" href="#Data Viewer">Data Viewer</a></li>
        <li><a id="TPortrait" href="#Portrait">Portrait</a></li>
        <li><a id="TGenes" href="#Genes">Genes</a></li>
        <li><a id="TCell Sorting" href="#Cell Sorting">Cell Sorting</a></li>
        <li><a id="TDatasets" href="#Datasets">Datasets</a></li>
      </ul>
    </div>
    <div class="mtit">
      <div class="f">
        <p>Brain Cell Atlas is a comprehensive and unified atlas of the brain that was built across studies, regions, diseases and sequencing platforms. We integrated the majority of the single-nuclei/single-cell transcriptomic datasets published from 2016 to present from a diverse source of human brain samples that provide a unified cell type and manually curated metadata annotated framework for brain cell research in health, disease as well as in the development.</p>
      </div>
    </div>
    <div class="mtit mt10">
      <div class="t"><a id="Data Viewer" href="#TData Viewer"> Data Viewer </a><span style='font-size:14px;'>&nbsp;&nbsp;Click to the top</span></div>
      <el-divider></el-divider>
      <div class="f">
        <p>The data viewer utilises the <a href="https://cellxgene.cziscience.com">cellxgene</a> module that displays the integrative UMAPs of the Adult Brain, Fetal Brain, Tumour and Organoids in the Brain Cell Atlas.</p>
        <p>For example, you can highlight the Adult Brain integrative UMAP of the Brain Cell Atlas from multiple dimensions:</p>
        <div align="left"><img src="@/assets/img/help/help_figure_cellxgene.png" alt="" style="max-width:75%;"></div>
        <br><br>
        <p><b>(1)</b> By clicking on the water drop icon, you can view coloured cells from a certain brain region of interest by scrolling down the <b>region</b> and the <b>subregion</b> tab on the left side of the cellxgene module. Several other dimiensions to view the UMAP are described as below:</p>
        <p>A list of selectable attributes to display the UMAPs are shown in the left column. </p>
        <el-table :data="dataViewerData" class="level-table mt10">
          <el-table-column label="Name" width="180">
            <template slot-scope="scope">
              <span class="level-table-span" v-html="scope.row.name"></span>
            </template>
          </el-table-column>
          <el-table-column label="Description">
            <template slot-scope="scope">
              <span class="level-table-span" v-html="scope.row.desc"></span>
            </template>
          </el-table-column>
        </el-table>
        <br>
        <p><b>(2)</b> There are two main types of cell type annotations: original cell type annotations and cell type annotations via label transfer.</p>
        <ul class="f users-can mt10">
        <li>
          Original cell type anotations are author provided cell type names if available from the public source, there is <b>original_name</b>, the cell type name and <b>original_name2</b>, the sub cell type name. Not all the cells have a author provided cell type classification label.
        </li>
        <li>
          Cell type annotations via label transfer. These are cell type names transfered from a well-annotated adult human brain snRNA dataset (<a href="https://www.science.org/doi/10.1126/science.add7046">Siletti et al., 2023</a>) and the fetal human brain scRNA resource (<a href="https://www.science.org/doi/10.1126/science.adf1226">Braun et al., 2023</a>). Label transfered cell type names are "Siletti_method" or "Braun_method" based on the <a href="#Markers"><b>machine-learning methods</b></a> used. 
        </li>
      </ul>
      <p>You can find more detailed usages of the module from <a href="https://cellxgene.cziscience.com/docs/01__CellxGene">cellxgene's documentation</a>.</p>
      </div>
    </div>
    <div class="mtit mt10">
      <div class="t"><a id="Portrait" href="#TPortrait"> Portrait </a><span style='font-size:14px;'>&nbsp;&nbsp;Click to the top</span></div>
      <el-divider></el-divider>
      <div class="f">
        <p>The interactive viewer shows the adult human brain and includes all the major regions from the data used in Brain Cell Atlas.</p>
        <div align="center"><img src="@/assets/img/help/help_figure_portrait.png" alt="" style="max-width:75%;"></div>
      </div>
      <div class="t1">Users can:</div>
        <p>
          <b>(1)</b> <i>Move</i> the mouse onto the text labels and read a brief introduction of the region from the Wikipedia site below the portrait. 
        </p>
        <p>
          <b>(2)</b> <i>Click</i> on the text labels or click a brain region graphic to jump to <a href="#Cell Sorting">Cell Sorting</a> to see all the corresponding cell information.
        </p>
        <ul class="f users-can mt10">
        <li>
          There are three anatomical levels appeared in the interactive viewer.
        </li>
      </ul>
      <el-table :data="levelData" class="level-table mt10">
        <el-table-column prop="Level1" label="Level1"></el-table-column>
        <el-table-column label="Level2">
          <template slot-scope="scope">
            <span class="level-table-span" v-for="item in scope.row.Level2" :key="item">{{item}}<br></span>
          </template>
        </el-table-column>
        <el-table-column label="Level3">
          <template slot-scope="scope">
            <span class="level-table-span" v-for="item in scope.row.Level3" :key="item">{{item}}<br></span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="mtit mt10">
      <div class="t"><a id="Genes" href="#TGenes"> Genes </a><span style='font-size:14px;'>&nbsp;&nbsp;Click to the top</span></div>
      <el-divider></el-divider>
      <div class="t1"><a id="Markers"> Markers </a></div>
      <div class="f">
        <p>Users can obtain a list of differentially expressed genes of the cell types from a selected brain region and the list is available for download in csv or pdf formats.</p>
        <p>The cell type name is defined by the most scored prediced cell type computed from the 8 machine-learning-based annotation methods:</p>
      </div>
      <ul class="f users-can">
        <li>
          <a href="https://doi.org/10.1093/bioinformatics/btz592">ACTINN</a>
        </li>
        <li>
          <a href="10.1093/nar/gkz543">CHETAH</a>
        </li>
        <li>
          <a href="https://www.nature.com/articles/s41587-021-01001-7">scArches</a>
        </li>
        <li>
          <a href="https://doi.org/10.1038/nmeth.4644">ScMap</a>
        </li>
        <li>
          <a href="https://doi.org/10.1186/s13059-019-1862-5">scPred</a>
        </li>
        <li>
          <a href="https://doi.org/10.1016/j.cels.2019.06.004">SingleCellNet</a>
        </li>
        <li>
          <a href="https://doi.org/10.1038/s41590-018-0276-y">SingleR</a>
        </li>
        <li>
          scAnnot - a hierarchical classification model trained based on scANVI.
        </li>
      </ul>
      <p>For example, choosing an atlas to start with (Adult is shown here), and compute for candidate markers within a specific region by selecting the tab <b>By Region</b> or find candidate markers of a cell type by selecting the tab <b>By CellType</b>. After selection and click on the tab <b>Markers</b>, a volcano plot will be shown and list of candidate markers are listed in the table available for downlod in pdf or csv format.</p>
      <div align="center"><img src="@/assets/img/help/help_figure_marker.png" alt="" style="max-width:75%;"></div>
      <div align="center"><img src="@/assets/img/help/help_figure_marker2.png" alt="" style="max-width:75%;"></div>
      <div align="center"><img src="@/assets/img/help/help_figure_marker3.png" alt="" style="max-width:75%;"></div>

      <div class="t1">Region DEG</div>
      <div class="f">
        <p>Region DEG (Differential expression Genes) compares different cell types from the same region. A violin plot of the top 3 DEGs for each different cell types of the region will be shown after selection of the input.</p>
      </div>
      <div align="center"><img src="@/assets/img/help/help_figure_DEG.png" alt="" style="max-width:75%;"></div>
      <div align="center"><img src="@/assets/img/help/help_figure_DEG2.png" alt="" style="max-width:75%;"></div>

      <div class="t1">CellType DEG</div>
      <div class="f">
        <p>CellType DEG compares the same cell type from different regions. Likewise, a violin plot of the top 3 DEGs for this  cell type across different region will be shown after selection of the input.</p>
      </div>
    </div>
    <div class="mtit mt10">
      <div class="t"><a id="Cell Sorting" href="#TCell Sorting"> Cell Sorting </a><span style='font-size:14px;'>&nbsp;&nbsp;Click to the top</span></div>
      <el-divider></el-divider>
      <div class="f">
        <p>The Cell Sorting function allows users to retrieve the cells by selections from the metadata or the gene features. More details on Cell Sorting can be found
          <a href="https://www.sciencedirect.com/science/article/pii/S2666166722004695?via%3Dihub">here.</a>
        </p>
        <ul class="f users-can mt10">
          <li>All cells in uGT is the number of total cell count in cell sorting. </li>
          <li>The two cicrular plots on the page shows the porportion of each anatomical regions and the cell type composition of the Brain Cell Atlas.</li>
      </ul>
      </div>
      <div align="center"><img src="@/assets/img/help/help_figure_cellsorting.png" alt="" style="max-width:75%;"></div>
      <div class="f">
        <p>Example:</p>
        <p>You can add filter to retrieve a specific cell type and analyse the proportions of regions where are these cells come from and analyse its transcriptomic expressions. </p>
      </div>
      <div align="center"><img src="@/assets/img/help/help_figure_cellsorting2.png" alt="" style="max-width:75%;"></div>
      <div class="f">
        <br>
        <p><b>(1)</b> Click on the plus sign &quot;+&quot; to add a step. </p>
        <p><b>(2)</b> Press the &quot;<b>Add Filter</b>&quot; button to select an attribute to retrieve relevant cells from Sub-atlas (Adult, Fetal, Tumour, Organoid), Gene or metadata (which contains the demographical, sample information and <a href='#Markers'>label tranfered cell type annotations of the cells</a>).</p>
        <p><b>(3)</b> Scroll down to select attributes, for example: Metadata -&gt; Cell Type -&gt; Astrocyte. Press the &quot;<b>Apply</b>&quot; button to continue. This will return a circular plot on the lfet that shows the proportion of each anatomical regions that contain the astrocytes, and a total number of retrieved astrocytes below in the &quot;<b>cell query language</b>&quot; block.</p>
        <!--(4) You can press the 'Analysis' button under the right circular plot to view the expression profiles of the astrocyte
        ![](help_figure_cellsorting3.png)-->
        <p>Further descriptins on Cell Sorting can be found <a href='https://www.sciencedirect.com/science/article/pii/S2666166722004695?via%3Dihub#sec2'>here</a>.</p>
      </div>
    </div>

    <div class="mtit mt10" id="Datasets">
      <div class="t"><a id="Datasets" href="#TDatasets"> Datasets </a><span style='font-size:14px;'>&nbsp;&nbsp;Click to the top</span></div>
      <el-divider></el-divider>
      <div class="f">
        <p>The datasets page includes all the datasets used in the Brain Cell Atlas, a full list of the studies and authors from this page can be found <a href='https://docs.google.com/spreadsheets/d/1-EyAjwjJKCpwmAnUDTbKSAQ-yJSBHGJSej_jXxYiTjg/edit#gid=0'>here</a>. Processed data with re-annotated cell type metadata will be avaiable for download upon publication.</p>
        <div align="center"><img src="@/assets/img/help/help_figure_dataset.png" alt="" style="max-width:75%;"></div>
      </div>
    </div>
    <div style="height:70px"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      levelData: [
        {
          Level1: 'Cerebral cortex',
          Level2: ['Frontal lobe'],
          Level3: ['Prefrontal cortex', ' Motor cortex']
        },
        {
          Level1: 'Cerebral cortex',
          Level2: ['Parietal lobe'],
          Level3: ['Somatosensory cortex']
        },
        {
          Level1: 'Cerebral cortex',
          Level2: ['Occipital lobe', 'Temporal lobe', 'Cingulate cortex'],
        },
        {
          Level1: 'Brainstem',
          Level2: ['Midbrain', 'Pons', 'Medulla oblongata'],
        },
        {
          Level1: 'Deep structures',
          Level2: ['Amygdala', 'Basal ganglia', 'Hippocampus', 'Hypothalamus', 'Olfactory bulb', 'Pineal gland', 'Putamen', 'Thalamus'],
        },
        {
          Level1: 'Corpus callosum',
        },
        {
          Level1: 'Cerebellum',
        },
        {
          Level1: 'Spinal cord',
        }
      ],
      dataViewerData: [
        {
          name: 'cell_ID',
          desc: 'Cell barcode.'
        },
        {
          name: 'Seq_tech',
          desc: 'Sequencing platforms used.'
        },
        {
          name: 'donor_ID',
          desc: 'Author specified donor IDs, which are indicated in the original publications.'
        },
        {
          name: 'donor_gender',
          desc: 'F = Female; M = Male; Unclassified = Unknown.'
        },
        {
          name: 'donor_age',
          desc: `For postnatal individuals, 6 months old is denoted by 6mo; 21 years old is denoted by “21yr”.<br/>
                For prenatal individuals, 9w stands for 9 gestational weeks (GW). <br/>
                For organoids, use d (days in culture) <br/>
                Eg. 10d.`
        },
        {
          name: 'donor_status',
          desc: `Disease status of the sample is corresponding to common names appears in MONDO Diseased Ontology.<br/>
                <a style="color:#034cca" href="https://bioportal.bioontology.org/ontologies/MONDO/?p=classes&conceptid=root">
                https://bioportal.bioontology.org/ontologies/MONDO/?p=classes&conceptid=root
                </a>`
        },
        {
          name: 'orginal_name',
          desc: 'Original cell type annotations provided by the author'
        },
        {
          name: 'region',
          desc: `Anatomical structure level 1 (Please find details in the first table of the Help Page).`
        },
        {
          name: 'subregion',
          desc: `Anatomical structure level 2 (Please find details in the first table of the Help Page).`
        },
        {
          name: 'sample_status',
          desc: `Each cell's disease status corresponds to common names appearing in MONDO Diseased Ontology.<br/>
                <a style="color:#034cca" href="https://bioportal.bioontology.org/ontologies/MONDO/?p=classes&conceptid=root">
                https://bioportal.bioontology.org/ontologies/MONDO/?p=classes&conceptid=root
                </a> `
        },
        {
          name: 'treatment',
          desc: `The cell donor’s personal medical treatment, not individual cells, unless the cell source is from an organoid.`
        },
        {
          name: 'ethnicity',
          desc: `The ethnicity of the donor`
        },
        {
          name: 'if_patient',
        },
        {
          name: 'species',
          desc: `Homo sapiens<br/>
                  Mus musculus`
        },
        {
          name: 'sample_type',
          desc: `Adult, Fetal, Organoid, Tumour`
        },
        {
          name: 'seq_method',
          desc: `snRNA-seq/scRNA-seq`
        },
        {
          name: 'project_code',
          desc: `Project codes are the data accession codes or strings of abbreviation of the study provided the authors.<br/>
                E.g., GSE/SCP/E-MTAB-/PRJNA/EGAS/phs/PRJEB/SDY/SRP`
        },
        {
          name: 'sample_ID',
          desc: `If not from GSE, use author_year_samplename`
        },
        {
          name: `ACTINN<br/>
                CHETAH<br/>
                scArches<br/>
                scmap<br/>
                SingleR<br/>
                ScPred<br/>
                scArches<br/>
                SingleCellNet<br/>
                scAnnot`,
          desc: `The putative cell types are calculated by each of the implemented machine-learning-based methods.<br/>
          Siletti_ACTINN: The cell type annotation computed by the ACTINN algorithm using Siletti et al. as the reference.`
        },
        {
          name: 'reference',
          desc: `The doi of the publication. If there is no doi, a data retrieval link is provided or simply N/A.`
        },
        {
          name: 'sample',
          desc: `Samplename in the raw data`
        },
        {
          name: 'original_name2',
          desc: `Sub cell type annotation provided by the author. ‘Unclassified’ if not provided`
        }
      ]
    }
  },
  methods: {

  },
  mounted () {
    this.$nextTick(() => {
      const routePath = this.$route.fullPath
      const anchorPoint = routePath.split('#')[1]
      console.log(anchorPoint)
      if (anchorPoint) {
        const anchor = document.getElementById(anchorPoint)
        anchor.scrollIntoView()
      }
    })
  }
}
</script>
<style lang="scss" scoped>
a {
  color: #034cca;
}
.wrap {
  font-size:calc(100vw * 100 / 9500);
}
.users-can {
  padding-left: 20px;
  li {
    list-style: disc;
  }
}
.level-table {
  &-span {
    line-height: 2em;
  }
}
.title {
  font-size:calc(100vw * 100 / 7000);
  ul {
    list-style-type: none;
    margin: 0;
    margin-top: 30px;
    padding: 0;
    overflow: hidden;
    background-color: rgb(240, 240, 240); /* 修改背景颜色 */
    border: 1px solid #ccc; /* 添加边框 */
    border-radius: 5px; /* 边框圆角 */
    padding: 2px; /* 调整内边距 */
    display: inline-block; /* 按内容实际宽度填充 */
    text-align: center; /* 居中对齐 */
  }

  li {
    display: inline-block; /* 按内容实际宽度填充 */
    border-right: 1px solid #ccc; /* 添加分割线 */
    margin-right: -4px; /* 修正间隙 */
  }

  li:last-child {
    border-right: none;
  }

  li a {
    display: block;
    color: #034cca;
    text-align: center;
    padding: 6px 13px; /* 调整内边距 */
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background-color: rgb(220, 220, 220); /* 修改悬停颜色 */
  }
}
</style>