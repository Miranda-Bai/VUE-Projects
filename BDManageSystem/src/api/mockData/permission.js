import Mock from 'mockjs'

export default {
  getMenu: config => {
    const { username, password } = JSON.parse(config.body)
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === 'admin' && password === 'admin') {
      return {
        code: 200,
        data: {
          menu: [
            {
              path: '/home',
              name: 'home',
              meta:{label: 'Homepage',},
              label: 'Homepage',
              icon: 'house',
              url: '/home/Home.vue'
            },
            {
              path: '/mall',
              name: 'mall',
              meta:{label: 'Stock',},
              label: 'Stock',
              icon: 'video-play',
              url: 'Mall.vue'
            },
            {
              path: '/user',
              name: 'user',
              meta:{label: 'User Management',},
              label: 'User Management',
              icon: 'user',
              url: '/User/User.vue'
            },
            {
              path: "/other",
              label: 'Others',
              icon: 'location',
              children: [
                {
                  path: '/page1',
                  name: 'page1',
                  meta:{label: 'Page One',},
                  label: 'Page One',
                  icon: 'setting',
                  url: 'Page1.vue'
                },
                {
                  path: '/page2',
                  name: 'page2',
                  meta:{label: 'Page Two',},
                  label: 'Page Two',
                  icon: 'setting',
                  url: 'Page2.vue'
                }
              ]
            }
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else if (username === 'xiaoxiao' && password === 'xiaoxiao') {
      return {
        code: 200,
        data: {
          menu: [
            {
              path: '/home',
              name: 'home',
              meta:{label: 'Homepage',},
              label: 'Homepage',
              icon: 'house',
              url: '/home/Home.vue'
            },
            {
              path: '/mall',
              name: 'mall',
              meta:{label: 'Stock',},
              label: 'Stock',
              icon: 'video-play',
              url: 'Mall.vue'
            }
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: '密码错误'
        }
      }
    }

  }
}