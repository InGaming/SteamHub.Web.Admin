<template>
  <div style="padding-top: 150px">
    <form>
      <v-container grid-list-sm>
        <v-layout row wrap justify-center align-center>
          <v-flex xs4>
            <v-text-field v-model="title" label="文章标题"></v-text-field>
          </v-flex>

          <v-flex xs4>
            <v-text-field v-model="author" label="作者"></v-text-field>
          </v-flex>

          <v-flex xs4>
            <v-select v-model="type" :items="types" label="分区" outline></v-select>
          </v-flex>

          <v-flex xs12>
            <section>
              <div class="quill-editor" :content="content" v-quill:myQuillEditor="editorOption"
              @change="onEditorChange($event)"
              ></div>
            </section>
          </v-flex>

          <v-flex xs12>
            <div class="text-xs-right">
              <v-btn @click="submit">
                {{ submitBtn }}
              </v-btn>
            </div>
          </v-flex>
        </v-layout>

      </v-container>
    </form>
  </div>
</template>

<script>
  export default {
    data: () => ({
      submitBtn: '提交',
      types: ['游戏推荐', '业内资讯', '工具整合', '使用技巧'],
      type: '',
      content: '',
      title: '',
      author: '',
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['link', 'image', 'video']
          ]
        }
      }
    }),
    methods: {
      onEditorChange ({ editor, html, text }) {
        this.content = html
      },
      submit: async function () {
        if (this.content === '' || this.title === '' || this.author === '' || this.type === '') {
        } else {
          this.$axios.defaults.headers.post['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTUzMjQzNTY4NSwiZXhwIjo0MTI0NDM1Njg1fQ.Y3G3jBNF2EN2vPqxU3q3Pnrhm22-Ry2Ut-oh6pGwJx4'
          await this.$axios.$post('http://localhost:3333/api/v1/articles/', {
            title: this.title,
            author: this.author,
            type: this.type,
            content: this.content
          })
          this.submitBtn = '成功, 接着创建'
          this.content = ''
          this.title = ''
          this.author = ''
          this.type = ''
        }
      }
    }
  }
</script>

<style>
  .quill-editor {
    min-height: 300px;
    overflow-y: auto;
  }
  .ql-tooltip {
    left: 0 !important
  }
  iframe {
    width: 100%
  }
</style>