package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/api/block/:block", GetLatest())
	r.Run("localhost:9609")
}

func GetLatest() gin.HandlerFunc {
	return func(c *gin.Context) {
		var block string
		block = c.Param("block")

		if block != "latest" {
			blockNumberInt, _ := strconv.Atoi(block)
			blockNumber := fmt.Sprintf("%x", blockNumberInt)
			block = "0x" + blockNumber
			fmt.Println(block)
		}

		url := "https://cloudflare-eth.com/"
		fmt.Println("URL:>", url)
		fmt.Println("Given block -> ", block)

		var jsonStr = []byte(fmt.Sprintf(`{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["%s", true],"id":1}`, block))

		req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonStr))

		if err != nil {
			panic(err)
		}

		req.Header.Set("Content-Type", "application/json")

		client := &http.Client{}
		resp, err := client.Do(req)

		if err != nil {
			panic(err)
		}

		respBytes, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			panic(err)
		}

		var result map[string]interface{}
		err = json.Unmarshal(respBytes, &result)
		if err != nil {
			panic(err)
		}

		c.JSON(200, gin.H{
			"message": result,
		})
	}
}
