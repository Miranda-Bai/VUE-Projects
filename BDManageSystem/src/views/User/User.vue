<template>
  <div class="user-header">
    <el-button type="primary" @click="handleAdd">+ADD</el-button>
    <el-dialog
      v-model="dialogVisible"
      :title="action === 'add' ? 'Add New User' : 'Edit User'"
      width="40%"
      :before-close="handleClose"
    >
      <el-form
        :inline="true"
        :model="formUser"
        ref="userFormRef"
        :rules="rules"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="Full Name:" prop="name">
              <el-input
                v-model="formUser.name"
                placeholder="please enter user name"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Age:" prop="age">
              <el-input
                v-model.number="formUser.age"
                placeholder="please enter age"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="Gender:" prop="gender">
              <el-select
                v-model="formUser.gender"
                placeholder="please enter gender"
              >
                <el-option label="Female" value="0" />
                <el-option label="Male" value="1" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Birthday:" prop="birth">
              <el-date-picker
                v-model="formUser.birth"
                type="date"
                placeholder="Pick a date"
                style="width: 100%"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="Address:" prop="addr">
          <el-input
            v-model="formUser.addr"
            placeholder="please enter address"
          />
        </el-form-item>
        <el-row style="justify-content: flex-end">
          <el-form-item>
            <el-button type="primary" @click="handleCancel"> Cancel </el-button>
            <el-button type="primary" @click="onSubmit">Confirm</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </el-dialog>
    <el-form :inline="true" :model="formInline">
      <el-form-item>
        <el-input
          v-model="formInline.keyword"
          placeholder="please enter user's name"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSearch">Search</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="table">
    <el-table :data="list" style="width: 100%">
      <el-table-column
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
        :width="item.width ? item.width : 125"
      />
      <el-table-column fixed="right" label="Operations" min-width="180">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.row)">
            Edit
          </el-button>
          <el-button
            type="danger"
            size="small"
            @click="handleDelete(scope.row)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="config.total"
      :hide-on-single-page="true"
      @current-change="changePage"
      class="pager"
    />
  </div>
</template>
<script setup>
import { getCurrentInstance, onMounted, ref, reactive, nextTick } from "vue";

const proxy = getCurrentInstance().appContext;
const tableLabel = reactive([
  {
    prop: "name",
    label: "Name",
  },
  {
    prop: "age",
    label: "Age",
  },
  {
    prop: "genderLabel",
    label: "Gender",
  },
  {
    prop: "birth",
    label: "Birth Date",
    width: 200,
  },
  {
    prop: "addr",
    label: "Address",
    width: 320,
  },
]);
const list = ref([]);
// total总页数 page当前页
const config = reactive({
  total: 0,
  page: 1,
  name: "",
});
const getUserData = async (config) => {
  let res = await proxy.config.globalProperties.$api.getUserData(config);

  list.value = res.list.map((item) => {
    item.genderLabel =
      item.gender === 0 || item.gender === "0" ? "female" : "male";
    return item;
  });
  config.total = res.count;
  // console.log("list.value:", list.value);
};
// 触发changePage事件会自动传入当前页
const changePage = (page) => {
  // console.log(page);
  config.page = page;
  getUserData(config);
};
const formInline = reactive({
  keyword: "",
});

const handleSearch = function () {
  config.name = formInline.keyword;
  console.log("config:", config);
  getUserData(config);
};
// 控制模态框的显示隐藏
const dialogVisible = ref(false);
const handleClose = (done) => {
  ElMessageBox.confirm("Are you sure to close this dialog?")
    .then(() => {
      //重置表单 记得要给表单项加上对应的prop才会重置成功 el-form-item
      userFormRef.value.resetFields();
      done();
    })
    .catch(() => {
      // catch error
    });
};
// 添加用户的form数据
const formUser = reactive({
  name: "", //添加用户的用户名
  age: "",
  gender: "",
  birth: "",
  addr: "",
});
// el-form ref引用的表单对象
const userFormRef = ref(null);
// 添加用户
const onSubmit = () => {
  //提交时对数据做校验
  userFormRef.value.validate(async (valid) => {
    //表单校验通过再提交 validate方法对整个表单进行验证
    if (valid) {
      if (action.value === "add") {
        let res = await proxy.config.globalProperties.$api.addUser(formUser);
        // console.log("res in adduser:", res);
        if (res) {
          //重置表单 记得要给表单项加上对应的prop才会重置成功 el-form-item
          userFormRef.value.resetFields();
          console.log("userFormRef:", userFormRef.value);
          //模态框消失
          dialogVisible.value = false;
          //通知添加成功
          //重新调用getUserData
          getUserData(config);
        }
      } else {
        //编辑的接口
        console.log("action", action.value);
        formUser.gender =
          formUser.gender === "female" || formUser.gender === "0" ? 0 : 1;
        // console.log("formUser:", formUser);
        let res = await proxy.config.globalProperties.$api.editUser(formUser);
        console.log("res in editUser:", res);
        if (res) {
          //重置表单 记得要给表单项加上对应的prop才会重置成功 el-form-item
          userFormRef.value.resetFields();
          //模态框消失
          dialogVisible.value = false;
          //通知添加成功
          //重新调用getUserData
          getUserData(config);
        }
      }
    } else {
      ElMessage({
        showClose: true,
        message: "Please enter correct content",
        type: "error",
      });
    }
  });
};
// 点击取消按钮时，要清空表单内容
const handleCancel = () => {
  //重置表单 记得要给表单项加上对应的prop才会重置成功 el-form-item
  userFormRef.value.resetFields();
  //模态框消失
  dialogVisible.value = false;
};
//表单验证规则
const rules = reactive({
  name: [{ required: true, message: "Please input name" }],
  age: [
    { required: true, message: "Please input age" },
    { type: "number", message: "age must be a number" },
  ],
  gender: [{ required: true, message: "Please select gender" }],
  birth: [{ required: true, message: "Please select your birthday" }],
  addr: [{ required: true, message: "Please enter your address" }],
});
//区分编辑和新增
const action = ref("add");
//新增按钮
const handleAdd = () => {
  action.value = "add";
  dialogVisible.value = true;
};
//编辑按钮
const handleEdit = (row) => {
  // console.log("row:", row);
  action.value = "edit";
  dialogVisible.value = true;
  row.gender = row.gender === 0 || row.gender === "female" ? "female" : "male";
  //在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM
  //防止点击编辑后再点击新增模态框中有数据
  nextTick(() => {
    //浅拷贝 把值赋给模态框
    Object.assign(formUser, row);
  });
};
//删除按钮
const handleDelete = (row) => {
  console.log("row in delete", row);

  ElMessageBox.confirm("Are you sure to delete this user?")
    .then(async () => {
      let res = await proxy.config.globalProperties.$api.deleteUser({
        id: row.id,
      });
      console.log("res in delete:", res);
      ElMessage({
        showClose: true,
        message: "delete successful",
        type: "success",
      });
      getUserData(config);
      done();
    })
    .catch(() => {
      // catch error
    });
};
onMounted(() => {
  getUserData(config);
});
</script>
<style lang="less" scoped>
.table {
  position: relative;
  .pager {
    position: absolute;
    right: 0;
    bottom: -42px;
  }
}
.user-header {
  display: flex;
  justify-content: space-between;
  .el-input {
    width: 180px;
  }
}
</style>
