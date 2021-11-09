import selenium
from selenium import webdriver
# =============================================================================
from selenium.webdriver.common.keys import Keys   
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
# =============================================================================
# =============================================================================
# import time
# =============================================================================


PATH = r"C:\Users\grant\Desktop\chromedriver.exe"
driver = webdriver.Chrome(PATH)


driver.get("https://orteil.dashnet.org/cookieclicker/")





# =============================================================================
driver.implicitly_wait(5)
 
cookie = driver.find_element_by_id("bigCookie")
cookie_count = driver.find_element_by_id("cookies")
storeSection = driver.find_element_by_id("storeBulk1")
storeSection2 = driver.find_element_by_id("storeBulk10")
storeSection3 = driver.find_element_by_id("storeBulk100")
items = [driver.find_element_by_id("productPrice" + str(i)) for i in range(1, -1, -1)]
 
actions = ActionChains(driver)

while True: 
   cookie.click()
   count = int(cookie_count.text.split(" ")[0])
   for item in items:
      value = int(item.text.replace(',', ''))
      if value <= count:
         upgrade_actions = ActionChains(driver)
         upgrade_actions.move_to_element(item)
         upgrade_actions.click()
         upgrade_actions.perform()