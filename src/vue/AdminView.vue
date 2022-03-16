<template>
  <div class="var1">
    <div class="var2">
      <div class="var3">
        <div class="var4 hidden"></div>
        <div class="var4">
          <a-button @click="$router.replace('/')" size="large"> 返回 </a-button>
          <h1>分类管理</h1>
          <a-table :data-source="a1" :rowKey="(e) => e.id" :columns="column1">
            <span slot="abc" slot-scope="record, index">
              <a-button
                @click="
                  show1 = true;
                  update1.id = record.id;
                  update1.name = record.name;
                  update1.index = record.index;
                "
                >修改</a-button
              >
              <a-button @click="showDeleteConfirm('delA1', record.id)"
                >删除</a-button
              >
            </span>
          </a-table>
          <a-button type="primary" @click="show2 = true" size="large">
            添加
          </a-button>
          <h1>书签管理</h1>
          <a-select style="width: 120px" v-model="tempId">
            <a-select-option :value="0"> 未分类 </a-select-option>
            <a-select-option :value="item.id" v-for="item in a1" :key="item.id">
              {{ item.name }}
            </a-select-option>
          </a-select>
          <a-table :data-source="a3" :rowKey="(e) => e.id" :columns="column2">
            <span slot="abc" slot-scope="record, index">
              <a-button
                @click="
                  show3 = true;
                  update2.id = record.id;
                  update2.id2 = record.id2;
                  update2.name = record.name;
                  update2.link = record.link;
                  update2.index = record.index;
                "
                >修改</a-button
              >
              <a-button @click="showDeleteConfirm('delA2', record.id)"
                >删除</a-button
              >
            </span>
          </a-table>
          <a-button type="primary" @click="show4 = true" size="large">
            添加
          </a-button>
        </div>
      </div>
    </div>
    <a-modal
      title="修改"
      :visible="show1"
      @cancel="() => (show1 = false)"
      @ok="updA1"
    >
      <a-form
        :form="update1"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 12 }"
      >
        <a-form-item label="标识">
          <span>{{ update1.id }}</span>
        </a-form-item>
        <a-form-item label="名称">
          <a-input v-model="update1.name" />
        </a-form-item>
        <a-form-item label="索引">
          <a-input v-model="update1.index" />
        </a-form-item>
      </a-form>
    </a-modal>
    <a-modal
      title="添加"
      :visible="show2"
      @cancel="
        show2 = false;
        add1 = {};
      "
      @ok="addA1"
    >
      <a-form :form="add1" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
        <a-form-item label="名称">
          <a-input v-model="add1.name" />
        </a-form-item>
      </a-form>
    </a-modal>
    <a-modal
      title="修改"
      :visible="show3"
      @cancel="() => (show3 = false)"
      @ok="updA2"
    >
      <a-form
        :form="update2"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 12 }"
      >
        <a-form-item label="标识">
          <span>{{ update2.id }}</span>
        </a-form-item>
        <a-form-item label="分类">
          <a-select style="width: 120px" v-model="update2.id2">
            <a-select-option :value="0"> 未分类 </a-select-option>
            <a-select-option :value="item.id" v-for="item in a1" :key="item.id">
              {{ item.name }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="链接名称">
          <a-input v-model="update2.name" />
        </a-form-item>
        <a-form-item label="链接地址">
          <a-input v-model="update2.link" />
        </a-form-item>
        <a-form-item label="索引">
          <a-input v-model="update2.index" />
        </a-form-item>
      </a-form>
    </a-modal>
    <a-modal
      title="添加"
      :visible="show4"
      @cancel="
        show4 = false;
        add2 = { id2: 0 };
      "
      @ok="addA2"
    >
      <a-form :form="add2" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
        <a-form-item label="分类">
          <a-select style="width: 120px" v-model="add2.id2">
            <a-select-option :value="0"> 未分类 </a-select-option>
            <a-select-option :value="item.id" v-for="item in a1" :key="item.id">
              {{ item.name }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="链接名称">
          <a-input v-model="add2.name" />
        </a-form-item>
        <a-form-item label="链接地址">
          <a-input v-model="add2.link" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import { sortedArr } from '../func/sort';
export default {
  name: 'AdminView',
  data() {
    return {
      column1: [
        {
          title: '标识',
          dataIndex: 'id',
          align: 'center',
        },
        {
          title: '名称',
          dataIndex: 'name',
          align: 'center',
        },
        {
          title: '索引',
          dataIndex: 'index',
          align: 'center',
        },
        {
          title: '操作',
          align: 'center',
          scopedSlots: { customRender: 'abc' },
        },
      ],
      column2: [
        {
          title: '标识',
          dataIndex: 'id',
          align: 'center',
        },
        {
          title: '书签名称',
          dataIndex: 'name',
          align: 'center',
        },
        {
          title: '链接地址',
          dataIndex: 'link',
          align: 'center',
        },
        {
          title: '索引',
          dataIndex: 'index',
          align: 'center',
        },
        {
          title: '操作',
          align: 'center',
          scopedSlots: { customRender: 'abc' },
        },
      ],
      show1: false,
      update1: {},
      show2: false,
      add1: {},
      tempId: 0,
      show3: false,
      update2: { id2: 0 },
      show4: false,
      add2: { id2: 0 },
    };
  },
  computed: {
    a1() {
      return sortedArr(this.$store.state.a1, 'index');
    },
    a2() {
      return sortedArr(this.$store.state.a2, 'index');
    },
    a3() {
      return this.a2.filter((e) => {
        return (
          this.tempId === e.id2 ||
          (this.tempId === 0 &&
            this.a1.filter((e2) => {
              return e2.id === e.id2;
            }).length === 0)
        );
      });
    },
  },
  methods: {
    showDeleteConfirm(name, id) {
      this.$confirm({
        title: '确认删除？',
        content: '此操作无法撤销',
        okText: 'Yes',
        okType: 'normal',
        cancelText: 'No',
        onOk: () => {
          this.$store.dispatch(name, id);
        },
      });
    },
    updA1() {
      this.show1 = false;
      this.$store.dispatch('updA1', this.update1);
    },
    addA1() {
      this.show2 = false;
      for (let i = 1; i <= 1000; i++) {
        if (this.a1.filter((e) => e.id === i).length === 0) {
          this.add1.id = i;
          this.add1.index = 99;
          this.$store.dispatch('addA1', this.add1);
          break;
        }
      }
    },
    updA2() {
      this.show3 = false;
      this.$store.dispatch('updA2', this.update2);
    },
    addA2() {
      this.show4 = false;
      for (let i = 1; i <= 1000; i++) {
        if (this.a2.filter((e) => e.id === i).length === 0) {
          this.add2.id = i;
          this.add2.index = 99;
          this.$store.dispatch('addA2', this.add2);
          break;
        }
      }
    },
  },
};
</script>
<style scoped lang="less">
@primary: rgba(0, 0, 0, 0.8);
.clear() {
  &::after {
    content: '';
    display: block;
    clear: both;
  }
}
.hidden {
  visibility: hidden;
}
.var1 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: @primary;
  overflow: auto;
}
.var2 {
  width: 64rem;
  background-color: white;
  margin: 2rem auto 0;
  border-radius: 2rem;
  padding: 3rem;
  user-select: none;
}
</style>
