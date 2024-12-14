import { defineComponent, onMounted, reactive, ref } from 'vue';
import s from "./Home.module.scss";
import Typed from 'typed.js';
export const Home = defineComponent({
  setup: () => {
    const pageData = reactive({ text: '🧨 昭昭如愿，岁岁安澜' })
    const refTextWrapper = ref(null)
    onMounted(() => {
      setTimeout(() => {
        pageData.text = '冬宜密雪，有碎玉聲'
        new Typed(refTextWrapper.value, {
          strings: [pageData.text],
          typeSpeed: 20,
          onComplete: function (self) {
            // 打印完成后隐藏光标
            self.cursor.remove();
          }
        })
      }, 2300)
    });
    return () => (
      <div class={s.homePage} h-vhcheck pt-20px >
        <div class={s.greetingTextWrapper} pl-32px>
          <h3 ref={refTextWrapper} data-glitch={pageData.text} class={s.greetingText} >
            {pageData.text}
          </h3>
        </div>
        <div class={s.eventDateList} px-20px pb-200px>
          <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div>

          {/* 测试开始 */}
          <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div> <div class={s.eventDateCard} py-18px m-y-18px>
            <div class={s.eventDateCardIcon} ml-20px>
              😁
            </div>
            <div class={s.eventDateCardTitleAndDate} ml-12px>
              <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
              <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
            </div>
            <div class={s.eventDateCardDaysBetweenWrapper}>
              <div class={s.eventDateCardDaysBetweenShadow}></div>
              <div class={s.eventDateCardDaysBetween} text-32px>
                20天
              </div>
            </div>
            <div class={s.eventDateCardOperate} p-12px >
              🍈
            </div>
          </div>
          {/* 测试结束 */}
        </div>
      </div>
    )
  }
})